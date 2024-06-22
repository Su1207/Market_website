import React, { useEffect, useState } from "react";
import { format, parse, startOfWeek, addDays, isValid, isPast } from "date-fns";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import { useLocation, useParams } from "react-router-dom";

// Utility Functions
const parseDate = (dateString) => parse(dateString, "dd-MM-yyyy", new Date());

const formatDate = (date) =>
  isValid(date) ? format(date, "dd-MM-yyyy") : "Invalid Date";

const organizeDataIntoWeeks = (data) => {
  const weeks = {};
  const today = new Date();

  data.forEach((entry) => {
    const date = parseDate(entry.date);
    if (isValid(date)) {
      const weekStart = startOfWeek(date, { weekStartsOn: 1 });
      const formattedWeekStart = formatDate(weekStart);

      if (!weeks[formattedWeekStart]) {
        weeks[formattedWeekStart] = {
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
          Sat: "",
          Sun: "",
        };
      }

      const dayOfWeek = format(date, "EEE");
      weeks[formattedWeekStart][dayOfWeek] = entry.result;
    }
  });

  // Fill in missing past dates with default value
  Object.keys(weeks).forEach((weekStart) => {
    for (let i = 0; i < 7; i++) {
      const dayDate = addDays(parseDate(weekStart), i);
      if (isPast(dayDate) && !weeks[weekStart][format(dayDate, "EEE")]) {
        weeks[weekStart][format(dayDate, "EEE")] = "✦✦✦-✦✦-✦✦✦";
      }
    }
  });

  return weeks;
};

// Main Component
const CalendarTable = ({ data, isPanel }) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const weeks = organizeDataIntoWeeks(data);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center border rtl:text-right text-gray-500 px-4">
        <thead className="text-base text-gray-700 uppercase bg-gray-50">
          <tr className="bg-orange-500 text-white">
            <th className={`px-2 py-3 ${isPanel ? "block" : "hidden"}`}>
              DATE
            </th>
            {weekDays.map((day) => (
              <th className="px-2 py-3" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {Object.keys(weeks).map((weekStart) => (
            <tr key={weekStart} className="">
              <td
                className={`px-2 min-w-[8rem] border border-blue-400 py-3 ${
                  isPanel ? "flex" : "hidden"
                } flex-col text-base font-semibold text-black`}
              >
                {weekStart}
                <span>to</span>
                {formatDate(addDays(parseDate(weekStart), 6))}
              </td>
              {weekDays.map((day) => (
                <td
                  className="px-2 border min-w-[6rem] border-blue-400 font-semibold text-black py-3"
                  key={day}
                >
                  <div
                    className={`flex items-center ${
                      isPanel ? "justify-between" : "justify-center"
                    }`}
                  >
                    <span className={`${isPanel ? "flex" : "hidden"} flex-col`}>
                      {weeks[weekStart][day] &&
                        weeks[weekStart][day].split("-")[0] && (
                          <>
                            <span>
                              {weeks[weekStart][day].split("-")[0][0]}
                            </span>
                            <span>
                              {weeks[weekStart][day].split("-")[0][1]}
                            </span>
                            <span>
                              {weeks[weekStart][day].split("-")[0][2]}
                            </span>
                          </>
                        )}
                    </span>
                    <span className="text-lg font-semibold">
                      {weeks[weekStart][day] &&
                        weeks[weekStart][day].split("-")[1]}
                    </span>
                    <span className={`${isPanel ? "flex" : "hidden"} flex-col`}>
                      {weeks[weekStart][day] &&
                        weeks[weekStart][day].split("-")[2] && (
                          <>
                            <span>
                              {weeks[weekStart][day].split("-")[2][0]}
                            </span>
                            <span>
                              {weeks[weekStart][day].split("-")[2][1]}
                            </span>
                            <span>
                              {weeks[weekStart][day].split("-")[2][2]}
                            </span>
                          </>
                        )}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const combineResult = (open, mid, close) => {
  return `${open}-${mid}-${close}`;
};

const LabelResult = () => {
  const { id } = useParams();
  const location = useLocation();
  const gameKey = id;
  const [resultData, setResultData] = useState([]);
  const [gameName, setGameName] = useState("");
  const [todaysResult, setTodaysResult] = useState("✦✦✦-✦✦-✦✦✦");
  const [loading, setLoading] = useState(false);

  const currentDate = new Date();
  const date = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  const dateString = `${date}-${month}-${year}`;

  const isPanel = location.pathname.includes("panelChartRecord");

  useEffect(() => {
    try {
      setLoading(true);
      const resultRef = ref(database, `WEBSITE GAMES/${gameKey}/RESULT`);
      const gameNameRef = ref(database, `WEBSITE GAMES/${gameKey}/NAME`);

      const unsub1 = onValue(gameNameRef, (snapshot) => {
        if (snapshot.exists()) {
          setGameName(snapshot.val());
        }
      });

      const unsub = onValue(resultRef, (snapshot) => {
        if (snapshot.exists()) {
          const resultData = [];
          snapshot.forEach((yearSnapshot) => {
            const year = yearSnapshot.key;
            yearSnapshot.forEach((monthSnapshot) => {
              const month = monthSnapshot.key;
              monthSnapshot.forEach((dateSnapshot) => {
                const dateString = dateSnapshot.key;
                const result = combineResult(
                  dateSnapshot.val().OPEN,
                  dateSnapshot.val().MID,
                  dateSnapshot.val().CLOSE
                );

                resultData.push({
                  date: `${dateString}-${month}-${year}`,
                  result,
                });
              });
            });
          });
          setResultData(resultData);
        }
      });

      return () => {
        unsub();
        unsub1();
      };
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (resultData.length > 0) {
      const result = resultData.find((data) => data.date === dateString);
      setTodaysResult(result ? result.result : "✦✦✦-✦✦-✦✦✦");
    }
  }, [dateString, resultData]);

  if (loading) {
    return (
      <div className="h-[90vh] w-full flex justify-center items-center">
        <svg
          className="animate-spin h-5 w-5 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.314 2.686 6 6 6v-2.709z"
          ></path>
        </svg>
        <div className="font-semibold">loading</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-purple-50 min-h-screen">
      <div className="text-xl sm:text-3xl font-bold mb-8 py-6 px-4 text-center bg-purple-950 text-white w-full shadow-lg">
        {gameName} PANEL CHART
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-2xl font-bold mb-2">TODAY RESULT</div>
        <div className="mb-8 text-xl font-bold text-red-600 animate-pulse">
          {todaysResult}
        </div>
      </div>

      <div className="w-[95%] mx-[2.5%] pb-8">
        <CalendarTable data={resultData} isPanel={isPanel} />
      </div>
    </div>
  );
};

export default LabelResult;
