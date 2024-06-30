import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const PanelCountChart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const datas = [
    { count: "COUNT 0", numbers: ["00"] },
    {
      count: "COUNT 1",
      numbers: [
        "118, 127, 136, 145, 190,",
        "226, 235, 244, 280, 334,",
        "370, 460, 550, 100, 777,",
        "199, 289, 379, 388, 469,",
      ],
    },
    {
      count: "COUNT 2",
      numbers: [
        "299, 389, 479, 488, 569,",
        "578, 668, 677, 119, 128,",
        "137, 146, 155, 227, 236,",
        "245, 290, 335, 344, 380,",
        "470, 560, 110, 200, 444",
      ],
    },
    {
      count: "COUNT 3",
      numbers: [
        "399, 489, 579, 588, 669,",
        "678, 129, 138, 147, 156,",
        "228, 237, 246, 255, 336,",
        "345, 390, 480, 570, 660,",
        "120, 300, 111",
      ],
    },
    {
      count: "COUNT 4",
      numbers: [
        "499, 589, 679, 688, 778,",
        "139, 148, 157, 166, 229,",
        "238, 247, 256, 337, 346,",
        "355, 445, 490, 580, 670,",
        "112, 130, 220, 400, 888",
      ],
    },
    {
      count: "COUNT 5",
      numbers: [
        "599, 689, 779, 788, 149,",
        "158, 167, 239, 248, 257,",
        "266, 338, 347, 356, 446,",
        "455, 590, 680, 770, 113,",
        "122, 140, 230, 500, 555",
      ],
    },
    {
      count: "COUNT 6",
      numbers: [
        "699, 789, 159, 168, 177,",
        "249, 258, 267, 339, 348,",
        "357, 366, 447, 456, 690,",
        "780, 114, 123, 150, 240,",
        "330, 600, 222",
      ],
    },
    {
      count: "COUNT 7",
      numbers: [
        "799, 889, 169, 178, 259,",
        "268, 277, 349, 358, 367,",
        "448, 457, 466, 556, 790,",
        "880, 115, 124, 133, 160,",
        "223, 250, 340, 700, 999",
      ],
    },
    {
      count: "COUNT 8",
      numbers: [
        "899, 179, 188, 269, 278,",
        "359, 368, 377, 449, 458,",
        "467, 557, 566, 890, 116,",
        "125, 134, 170, 224, 233,",
        "260, 350, 440, 800, 666",
      ],
    },
    {
      count: "COUNT 9",
      numbers: [
        "189, 279, 288, 369, 378,",
        "459, 468, 477, 558, 567,",
        "990, 117, 126, 135, 144,",
        "180, 225, 234, 270, 360,",
        "450, 900, 333",
      ],
    },
  ];

  return (
    <div className="pt-4 font-poppins bg-orange-200 min-h-screen">
      <h1 className=" text-4xl font-bold px-4 text-center font-playwrite pt-4 pb-8">
        Shree Laxmi
      </h1>
      <div className=" border-4 rounded-md mx-4 shadow-lg text-center border-pink-600 py-4 px-2 mb-12">
        <p className=" text-lg font-semibold">
          पाना काउंट चार्ट पैनल काउंट चार्ट <br />
          पाने के तीनो अंको के जोड़ को पाना काउंट कहते हैं <br />
          जैसे 1+2+3=6 <br />
          और अगर जोड़ 9 से ज्यादा आये 2 अंको में <br />
          जैसे 4+5+6=15 तो 15 को भी आपस में जोड़ देंगे <br />
          1+5=6 तो 6 इस पाने का पाना काउंट कहलायेगा <br />
          नोट - कॉउंट टोटल से अलग समीकरण है
        </p>
      </div>

      <h1 className=" text-2xl uppercase px-4 font-semibold font-playwrite text-center mb-4">
        Shree Laxmi Panel Count Chart
      </h1>

      <div className=" pb-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="border-4 rounded-md mx-4 mb-4 shadow-lg text-center border-blue-900 py-4 px-2"
          >
            <h3 className=" font-semibold text-lg mb-4">{data.count}</h3>
            <p className=" text-xl font-semibold text-red-500">
              {data.numbers.map((number, key) => (
                <div key={key} className=" mb-1">
                  {number}
                </div>
              ))}
            </p>
          </div>
        ))}
      </div>

      <OtherPageFooter />
    </div>
  );
};

export default PanelCountChart;
