import React from "react";
import { useNavigate } from "react-router-dom";

const MarketList = ({ result }) => {
  const navigate = useNavigate();

  const handlePanel = (gameKey) => {
    navigate(`panelChartRecord/${gameKey}`);
  };

  const handleJodi = (gameKey) => {
    navigate(`jodiChartRecord/${gameKey}`);
  };

  return (
    <div className="flex md:flex-row flex-col items-start w-[97%] mx-[1.5%] gap-4 md:gap-[1.5%] my-5 ">
      <div className=" shadow-lg p-4 w-full md:w-1/2 rounded-md bg-amber-400">
        <div className=" text-2xl font-bold font-playwrite text-center mb-8">
          Satta Matka Jodi Chart
        </div>
        <div className=" flex flex-col gap-2 justify-center items-center ">
          {result &&
            result.map((data, index) => (
              <div
                key={index}
                onClick={() => handleJodi(data.key)}
                className=" font-poppins font-semibold text-blue-900 cursor-pointer hover:text-blue-950 hover:animate-pulse transition-all duration-300 ease-in-out  text-lg"
              >
                {data.NAME} JODI CHART
              </div>
            ))}
        </div>
      </div>
      <div className=" shadow-lg p-4 w-full md:w-1/2 bg-amber-400 rounded-md">
        <div className=" text-2xl font-bold font-playwrite text-center mb-8">
          Satta Matka Panel Chart
        </div>
        <div className=" flex flex-col gap-2 justify-center items-center ">
          {result &&
            result.map((data, index) => (
              <div
                key={index}
                onClick={() => handlePanel(data.key)}
                className=" font-poppins font-semibold text-blue-900 cursor-pointer hover:text-blue-950 hover:animate-pulse transition-all duration-300 ease-in-out  text-lg"
              >
                {data.NAME} PANEL CHART
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarketList;
