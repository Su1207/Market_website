import { get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Introduction from "../components/Introduction";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import MarketList from "../components/MarketList";
import MarketTracker from "../components/MarketTracker";
import LuckyNumber from "../components/LuckyNumber";

const formatResult = (open, mid, close) => {
  return `${open}-${mid}-${close}`;
};

const MarketResult = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const convertToTime = (timestamp) => {
    const currentDate = new Date(timestamp);
    const hours = (currentDate.getHours() % 12 || 12)
      .toString()
      .padStart(2, "0");
    const min = currentDate.getMinutes().toString().padStart(2, "0");

    const meridiem = currentDate.getHours() >= 12 ? "PM" : "AM";

    return `${hours}:${min} ${meridiem}`;
  };

  useEffect(() => {
    const resultsRef = ref(database, "WEBSITE GAMES");

    const fetchGameData = async () => {
      try {
        // const gamesSnapshot = await get(gamesRef);

        const snapshot = await get(resultsRef);

        const combinedData = [];

        if (snapshot.exists()) {
          snapshot.forEach((gameSnapshot) => {
            const gameKey = gameSnapshot.key;
            const resultData = gameSnapshot
              .child("RESULT")
              .child(year)
              .child(month)
              .child(day)
              .val();
            const name = gameSnapshot.child("NAME").val();
            const color = gameSnapshot.child("COLOR").val();
            const open = gameSnapshot.child("OPEN").val();
            const close = gameSnapshot.child("CLOSE").val();
            const lucky_no = gameSnapshot.child("LUCKY_NO").val();

            const resultString = resultData
              ? formatResult(resultData.OPEN, resultData.MID, resultData.CLOSE)
              : "✦✦✦-✦✦-✦✦✦";

            combinedData.push({
              key: gameKey,
              NAME: name,
              RESULT: resultString,
              OPEN: open,
              CLOSE: close,
              COLOR: color,
              LUCKY_NO: lucky_no,
            });
          });
          setResult(combinedData);
        }
      } catch (error) {
        console.error("Error fetching game data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribeResults = onValue(resultsRef, () => {
      fetchGameData(); // Fetch game data whenever result data changes
    });

    return () => {
      unsubscribeResults();
    };
  }, [day]);

  const navigate = useNavigate();

  const handlePanel = (gameKey) => {
    navigate(`panelChartRecord/${gameKey}`);
  };

  const handleJodi = (gameKey) => {
    navigate(`jodiChartRecord/${gameKey}`);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="relative w-full font-poppins bg-orange-200">
      <div className="fixed bottom-2 border-2 border-gray-300 left-3 bg-blue-800 text-white cursor-pointer hover:bg-black transition-all duration-300 ease-out font-semibold py-2 px-3 text-sm rounded-md">
        Matka Play
      </div>
      <div
        onClick={handleReload}
        className="fixed bottom-2 right-3 border-2 border-gray-300 bg-blue-800 text-white cursor-pointer hover:bg-blue-950 transition-all duration-300 ease-out font-semibold py-2 px-4 text-sm rounded-md"
      >
        Refresh
      </div>
      <Welcome />

      <LuckyNumber result={result} />

      <MarketTracker />

      <div className=" my-8">
        <div className="text-xl sm:text-3xl font-playwrite uppercase font-bold text-center">
          NOTICE
        </div>
        <p className=" text-base leading-7 mx-4 bg-red-600 text-gray-200 font-semibold text-center mt-4 p-4 border border-red-500 rounded-md shadow-lg">
          अपना बाजार shreelaxmi.services वेबसाइट में डलवाने
          <br /> के लिए आज ही हमें ईमेल करे
          <br />{" "}
          <span className=" text-blue-950">Email : support@shreelaxmi.net</span>
          <br /> शर्ते लागु
        </p>

        <p className=" text-sm font-semibold text-blue-950 mx-4 text-center mt-4 p-4 border-2 border-red-500 rounded-md shadow-lg">
          KALYAN MATKA | MATKA RESULT | KALYAN MATKA TIPS | SATTA MATKA |
          MATKA.COM | MATKA PANA JODI TODAY | BATTA SATKA | MATKA PATTI JODI
          NUMBER | MATKA RESULTS | MATKA CHART | MATKA JODI | SATTA COM | FULL
          RATE GAME | MATKA GAME | MATKA WAPKA | ALL MATKA RESULT LIVE ONLINE |
          MATKA RESULT | KALYAN MATKA RESULT | DPBOSS MATKA 143 | MAIN MATKA
        </p>
      </div>

      <div className="text-xl sm:text-3xl font-playwrite uppercase font-bold text-center my-8">
        Fastest Market Result
      </div>
      {isLoading ? (
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
      ) : (
        <div className=" m-4 rounded-md font-poppins border border-red-500">
          {result &&
            result.map((data, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between px-5"
                  style={{
                    backgroundColor:
                      data?.COLOR === "#fffff" || data?.COLOR === "#fff"
                        ? "transparent"
                        : data?.COLOR,
                  }}
                >
                  <div
                    onClick={() => handleJodi(data.key)}
                    className=" bg-violet-800 text-white font-semibold cursor-pointer p-1 px-2 text-sm rounded-lg"
                  >
                    Jodi
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center xs:justify-between p-5 xs:px-8 py-8">
                    <h3 className=" text-base text-center xs:text-xl sm:text-2xl font-bold">
                      {data.NAME}
                    </h3>
                    <p className="text-sm sm:text-xl font-semibold">
                      {data.RESULT}
                    </p>
                    <div className=" flex items-center justify-center text-sm sm:text-base font-semibold gap-2 sm:gap-5">
                      <div className=" text-center">
                        {convertToTime(data.OPEN)}
                      </div>
                      <div className=" text-center">
                        {convertToTime(data.CLOSE)}
                      </div>
                    </div>
                  </div>
                  <div
                    className=" bg-violet-800 text-white cursor-pointer hover:bg-violet-950 font-semibold p-1 px-2 text-sm rounded-lg"
                    onClick={() => handlePanel(data.key)}
                  >
                    Panel
                  </div>
                </div>
                <div className=" border w-full h-0 border-red-600 "></div>
              </div>
            ))}
        </div>
      )}

      <div className=" px-4 mb-2">
        <div className=" bg-pink-500 border-2 border-gray-100 shadow-lg text-center text-white mb-1 rounded-xl py-2 font-playwrite font-bold">
          EverGreen Trick Zone And Matka Tricks By DpBoss
        </div>
        <div className="container border-2 border-blue-900 rounded-md">
          <div className="red-container text-center py-2">
            <h1 className="text-white font-bold">Dpboss Special Game Zone</h1>
          </div>
          <div className="content py-2 flex flex-col  text-center text-purple-700 font-semibold">
            <Link className="py-2 border-t border-red-600">
              Dpboss Guessing Forum (Post)
            </Link>
            <Link
              to={"/matka-free-open"}
              className="py-2 border-t border-red-600"
            >
              All market free fix game
            </Link>
            <Link
              to={"/khatris-favourite-panna-chart"}
              className="py-2 border-t border-red-600"
            >
              Ratan Khatri Fix Panel Chart
            </Link>
            <Link
              to={"/matka-final-number-chart"}
              className="py-2 border-t border-red-600"
            >
              Matka Final Number Trick Chart
            </Link>
          </div>
        </div>
      </div>

      <div className=" px-4">
        <div className="container border-2 border-blue-900 rounded-md">
          <div className="red-container text-center py-2">
            <h1 className="text-white font-bold">Matka Jodi List</h1>
          </div>
          <div className="content py-2 flex flex-col text-center text-purple-700 font-semibold">
            <Link
              to={"/matka-jodi-count-chart"}
              className="py-2 border-t border-red-600"
            >
              Matka Jodi Count Chart
            </Link>
            <Link
              to={"/fix-open-to-close-by-date"}
              className="py-2 border-t border-red-600"
            >
              Dhanvarsha Daily Fix Open To Close
            </Link>
            <Link
              to={"/matka-jodi-family-chart"}
              className="py-2 border-t border-red-600"
            >
              Matka Jodi Family Chart
            </Link>
            <Link
              to={"/panel-count-chart"}
              className="py-2 border-t border-red-600"
            >
              Panel Count Chart
            </Link>
            <Link
              to={"/panel-total-chart"}
              className="py-2 border-t border-red-600"
            >
              Panel Total Chart
            </Link>
            <Link
              to={"/All-22-Card-Panna-Penal-Patti-Chart"}
              className="py-2 border-t border-red-600"
            >
              All 220 Card List
            </Link>
          </div>
        </div>
      </div>

      <MarketList result={result} />

      <Introduction />
      <Footer />
    </div>
  );
};

export default MarketResult;
