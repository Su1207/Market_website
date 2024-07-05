import React, { useState, useEffect, useRef } from "react";
import { get, onValue, ref } from "firebase/database";
import { database } from "../firebase"; // Adjust the import based on your firebase configuration file
import LoadingDots from "./LoadingDots";

const openResultString = (resultData) => {
  return `${resultData.OPEN}-${resultData.MID[0]}`;
};

const closeResultString = (resultData) => {
  return `${resultData.OPEN}-${resultData.MID}-${resultData.CLOSE}`;
};

const MarketTracker = () => {
  const [openArray, setOpenArray] = useState(() => {
    const savedOpenArray = localStorage.getItem("openArray");
    return savedOpenArray ? JSON.parse(savedOpenArray) : [];
  });

  const [disclaimerList, setDisclaimerList] = useState({});
  const [loading, setLoading] = useState(false);

  const [closeArray, setCloseArray] = useState(() => {
    const savedCloseArray = localStorage.getItem("closeArray");
    return savedCloseArray ? JSON.parse(savedCloseArray) : [];
  });

  const [currentResults, setCurrentResults] = useState(() => {
    const savedCurrentResults = localStorage.getItem("currentResults");
    return savedCurrentResults ? JSON.parse(savedCurrentResults) : {};
  });

  const resultTimers = useRef(new Map()); // Map to store timers for each market

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const convertToTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const fetchMarketData = async () => {
    const marketRef = ref(database, "WEBSITE GAMES");

    onValue(marketRef, (snapshot) => {
      if (snapshot.exists()) {
        const openArrayTemp = [];
        const closeArrayTemp = [];
        const currentTime = convertToTime(new Date().getTime());

        snapshot.forEach((marketSnapshot) => {
          const marketData = marketSnapshot.val();
          const gameKey = marketSnapshot.key;
          const openTime = convertToTime(marketData.OPEN);
          const closeTime = convertToTime(marketData.CLOSE);

          if (currentTime === openTime) {
            if (!openArray.some((item) => item.gameKey === gameKey)) {
              openArrayTemp.push({ NAME: marketData.NAME, gameKey });
            }
          }

          if (currentTime === closeTime) {
            if (!closeArray.some((item) => item.gameKey === gameKey)) {
              closeArrayTemp.push({ NAME: marketData.NAME, gameKey });
            }
          }
        });

        // Merge new open and close arrays with the existing ones
        setOpenArray((prevOpenArray) => {
          const mergedOpenArray = [
            ...prevOpenArray,
            ...openArrayTemp.filter(
              (item) =>
                !prevOpenArray.some(
                  (prevItem) => prevItem.gameKey === item.gameKey
                )
            ),
          ];
          saveToLocalStorage("openArray", mergedOpenArray);
          return mergedOpenArray;
        });

        setCloseArray((prevCloseArray) => {
          const mergedCloseArray = [
            ...prevCloseArray,
            ...closeArrayTemp.filter(
              (item) =>
                !prevCloseArray.some(
                  (prevItem) => prevItem.gameKey === item.gameKey
                )
            ),
          ];
          saveToLocalStorage("closeArray", mergedCloseArray);
          return mergedCloseArray;
        });
      }
    });
  };

  const fetchResults = (gameKey, marketType) => {
    const resultRef = ref(
      database,
      `WEBSITE GAMES/${gameKey}/RESULT/${year}/${month}/${day}`
    );

    onValue(resultRef, (snapshot) => {
      if (snapshot.exists()) {
        if (marketType === "OPEN") {
          const resultData = openResultString(snapshot.val());
          setCurrentResults((prevResults) => {
            const newResults = {
              ...prevResults,
              [gameKey]: resultData,
            };
            saveToLocalStorage("currentResults", newResults);
            return newResults;
          });
        } else {
          if (snapshot.val().CLOSE !== "✦✦✦") {
            const resultData = closeResultString(snapshot.val());
            setCurrentResults((prevResults) => {
              const newResults = {
                ...prevResults,
                [gameKey]: resultData,
              };
              saveToLocalStorage("currentResults", newResults);
              return newResults;
            });
          }
        }

        if (resultTimers.current.has(gameKey)) {
          clearTimeout(resultTimers.current.get(gameKey));
        }

        const removalTime = new Date().getTime() + 180000; // Current time + 3 minutes in milliseconds
        const existingRemovalTimes =
          JSON.parse(localStorage.getItem("removalTimes")) || {};
        existingRemovalTimes[gameKey] = removalTime;
        saveToLocalStorage("removalTimes", existingRemovalTimes);

        resultTimers.current.set(
          gameKey,
          setTimeout(() => {
            setOpenArray((prev) => {
              const newOpenArray = prev.filter(
                (item) => item.gameKey !== gameKey
              );
              saveToLocalStorage("openArray", newOpenArray);
              return newOpenArray;
            });
            setCloseArray((prev) => {
              const newCloseArray = prev.filter(
                (item) => item.gameKey !== gameKey
              );
              saveToLocalStorage("closeArray", newCloseArray);
              return newCloseArray;
            });
            setCurrentResults((prevResults) => {
              const newResults = { ...prevResults };
              delete newResults[gameKey];
              saveToLocalStorage("currentResults", newResults);
              return newResults;
            });
            resultTimers.current.delete(gameKey);

            const updatedRemovalTimes =
              JSON.parse(localStorage.getItem("removalTimes")) || {};
            delete updatedRemovalTimes[gameKey];
            saveToLocalStorage("removalTimes", updatedRemovalTimes);
          }, 180000)
        ); // 3 minutes in milliseconds
      }
    });
  };

  useEffect(() => {
    fetchMarketData();

    const marketDataInterval = setInterval(fetchMarketData, 30000); // Fetch market data every 30 seconds

    return () => clearInterval(marketDataInterval);
  }, []); // Empty dependency array so it runs only once

  useEffect(() => {
    openArray.forEach((market) => {
      if (!currentResults[market.gameKey]) {
        fetchResults(market.gameKey, "OPEN");
      }
    });
  }, [openArray, currentResults]); // Re-run when openArray or currentResults changes

  useEffect(() => {
    closeArray.forEach((market) => {
      if (!currentResults[market.gameKey]) {
        fetchResults(market.gameKey, "CLOSE");
      }
    });
  }, [closeArray, currentResults]);

  // On component mount, check if there are markets with pending removal times and set up their timers
  useEffect(() => {
    const removalTimes = JSON.parse(localStorage.getItem("removalTimes")) || {};
    const currentTime = new Date().getTime();

    Object.keys(removalTimes).forEach((gameKey) => {
      const timeRemaining = removalTimes[gameKey] - currentTime;
      if (timeRemaining > 0) {
        resultTimers.current.set(
          gameKey,
          setTimeout(() => {
            setOpenArray((prev) => {
              const newOpenArray = prev.filter(
                (item) => item.gameKey !== gameKey
              );
              saveToLocalStorage("openArray", newOpenArray);
              return newOpenArray;
            });
            setCloseArray((prev) => {
              const newCloseArray = prev.filter(
                (item) => item.gameKey !== gameKey
              );
              saveToLocalStorage("closeArray", newCloseArray);
              return newCloseArray;
            });
            setCurrentResults((prevResults) => {
              const newResults = { ...prevResults };
              delete newResults[gameKey];
              saveToLocalStorage("currentResults", newResults);
              return newResults;
            });
            resultTimers.current.delete(gameKey);

            const updatedRemovalTimes =
              JSON.parse(localStorage.getItem("removalTimes")) || {};
            delete updatedRemovalTimes[gameKey];
            saveToLocalStorage("removalTimes", updatedRemovalTimes);
          }, timeRemaining)
        );
      } else {
        // If the time has already passed, remove the market immediately
        setOpenArray((prev) => {
          const newOpenArray = prev.filter((item) => item.gameKey !== gameKey);
          saveToLocalStorage("openArray", newOpenArray);
          return newOpenArray;
        });
        setCloseArray((prev) => {
          const newCloseArray = prev.filter((item) => item.gameKey !== gameKey);
          saveToLocalStorage("closeArray", newCloseArray);
          return newCloseArray;
        });
        setCurrentResults((prevResults) => {
          const newResults = { ...prevResults };
          delete newResults[gameKey];
          saveToLocalStorage("currentResults", newResults);
          return newResults;
        });

        const updatedRemovalTimes =
          JSON.parse(localStorage.getItem("removalTimes")) || {};
        delete updatedRemovalTimes[gameKey];
        saveToLocalStorage("removalTimes", updatedRemovalTimes);
      }
    });
  }, []); // Empty dependency array so it runs only once

  useEffect(() => {
    if (openArray.length > 0 || closeArray.length > 0) {
      setLoading(true);
      const disclaimerArray = {};

      const fetchDisclaimers = async (gameKey) => {
        const dbRef = ref(database, `WEBSITE GAMES/${gameKey}/LIVE_DISCLAIMER`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          return snapshot.val();
        }
        return null;
      };

      const fetchAllDisclaimers = async () => {
        for (const game of [...openArray, ...closeArray]) {
          const disclaimer = await fetchDisclaimers(game.gameKey);
          if (disclaimer) {
            disclaimerArray[game.gameKey] = disclaimer;
          }
        }
        setDisclaimerList(disclaimerArray);
        setLoading(false);
      };

      fetchAllDisclaimers();
    }
  }, [openArray, closeArray]);

  console.log(disclaimerList);

  return (
    <div className=" w-full font-poppins my-8">
      <h2 className=" text-center font-playwrite text-3xl sm:text-5xl font-bold">
        LIVE RESULTS
      </h2>
      {(openArray.length > 0 || closeArray.length > 0) && !loading ? (
        <div className=" flex flex-col  gap-3 mt-5 border-red-500  bg-orange-400 border mx-4 rounded-md p-4 shadow-lg">
          <ul className=" flex flex-col gap-3">
            {openArray.map((market, index) => (
              <li key={index} className=" w-full">
                <div className="flex flex-col justify-center items-center">
                  <div className=" text-lg sm:text-2xl font-bold text-blue-950">
                    {market.NAME}
                  </div>
                  <div className=" font-semibold text-base text-center sm:text-lg text-green-700">
                    {currentResults[market.gameKey] ? (
                      <div className=" font-bold text-xl">
                        {currentResults[market.gameKey]}
                        <div className=" font-playwrite text-sm mt-1 text-black animate-pulse">
                          {disclaimerList[market.gameKey]
                            ? `${market.NAME} में पास हुआ अंक - ${
                                currentResults[market.gameKey].split("-")[1]
                              }`
                            : ""}
                        </div>
                      </div>
                    ) : (
                      <div className=" flex items-end gap-1">
                        Loading
                        <LoadingDots />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" w-full h-0 border border-blue-950 my-4"></div>
              </li>
            ))}
          </ul>
          <ul className=" flex flex-col gap-3">
            {closeArray.map((market, index) => (
              <li key={index} className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className=" text-lg sm:text-2xl font-bold text-blue-950">
                    {market.NAME}
                  </div>
                  <div className=" font-semibold text-base text-center sm:text-lg text-green-700">
                    {currentResults[market.gameKey] ? (
                      <div className=" font-bold text-xl">
                        {currentResults[market.gameKey]}
                        <div className=" font-playwrite text-sm mt-1 text-black animate-pulse">
                          {disclaimerList[market.gameKey]
                            ? `${market.NAME} में पास हुआ अंक - ${
                                currentResults[market.gameKey].split("-")[1][1]
                              }`
                            : ""}
                        </div>
                      </div>
                    ) : (
                      <div className=" flex items-end gap-1">
                        Loading
                        <LoadingDots />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" w-full h-0 border border-blue-950 my-4"></div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className=" flex items-center justify-center text-lg sm:text-xl font-bold p-4 text-blue-950">
          No Live Result
        </div>
      )}
    </div>
  );
};

export default MarketTracker;
