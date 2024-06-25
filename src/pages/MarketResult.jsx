import { get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";
import Introduction from "../components/Introduction";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import MarketList from "../components/MarketList";
import MarketTracker from "../components/MarketTracker";

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
            const app = gameSnapshot.child("APP").val();
            const color = gameSnapshot.child("COLOR").val();
            const open = gameSnapshot.child("OPEN").val();
            const close = gameSnapshot.child("CLOSE").val();

            const resultString = resultData
              ? formatResult(resultData.OPEN, resultData.MID, resultData.CLOSE)
              : "✦✦✦-✦✦-✦✦✦";

            combinedData.push({
              key: gameKey,
              NAME: name,
              RESULT: resultString,
              OPEN: open,
              CLOSE: close,
              APP: app,
              COLOR: color,
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
    <div className="relative w-full bg-orange-200">
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

      <MarketTracker />

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
                  <div className="flex xs:flex-row flex-col gap-2 xs:gap-0 justify-center items-center xs:justify-between p-5 xs:px-8 py-8">
                    <h3 className=" text-base text-center xs:text-xl sm:text-2xl font-bold">
                      {data.NAME}
                    </h3>
                    <p className="text-sm sm:text-xl font-semibold">
                      {data.RESULT}
                    </p>
                    <div className=" flex items-center text-sm sm:text-base font-semibold gap-2 sm:gap-5">
                      <div>{convertToTime(data.OPEN)}</div>
                      <div>{convertToTime(data.CLOSE)}</div>
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

      <MarketList result={result} />

      <Introduction />
      <Footer />
    </div>
  );
};

export default MarketResult;
