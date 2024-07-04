import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const PanelTotalChart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const datas = [
    {
      count: "TOTAL 0",
      numbers: [
        "118, 127, 136, 145, 190, 226, 235,",
        "244, 280, 334, 370, 460, 550, 299,",
        "389, 479, 488, 569, 578, 668, 677",
      ],
    },
    {
      count: "TOTAL 1",
      numbers: [
        "100, 119, 128, 137, 146, 155, 227,",
        "236, 245, 290, 335, 344, 380, 470,",
        "560, 399, 489, 579, 588, 669, 678",
      ],
    },
    {
      count: "TOTAL 2",
      numbers: [
        "110, 200, 129, 138, 147, 156, 228,",
        "237, 246, 255, 336, 345, 390, 480,",
        "570, 660, 499, 589, 679, 688, 778",
      ],
    },
    {
      count: "TOTAL 3",
      numbers: [
        "777, 444, 120, 300, 111, 139, 148, 157,",
        "166, 229, 238, 247, 256, 337, 346, 355,",
        "445, 490, 580, 670, 599, 689, 779, 788",
      ],
    },
    {
      count: "TOTAL 4",
      numbers: [
        "112, 130, 220, 400, 149, 158, 167,",
        "239, 248, 257, 266, 338, 347, 356,",
        "446, 455, 590, 680, 770, 699, 789",
      ],
    },
    {
      count: "TOTAL 5",
      numbers: [
        "113, 122, 140, 230, 500, 159, 168,",
        "177, 249, 258, 267, 339, 348, 357,",
        "366, 447, 456, 690, 780, 799, 889",
      ],
    },
    {
      count: "TOTAL 6",
      numbers: [
        "888, 555, 114, 123, 150, 240, 330, 600,",
        "222, 169, 178, 259, 268, 277, 349, 358,",
        "367, 448, 457, 466, 556, 790, 880, 899",
      ],
    },
    {
      count: "TOTAL 7",
      numbers: [
        "115, 124, 133, 160, 223, 250, 340,",
        "700, 179, 188, 269, 278, 359, 368,",
        "377, 449, 458, 467, 557, 566, 890",
      ],
    },
    {
      count: "TOTAL 8",
      numbers: [
        "116, 125, 134, 170, 224, 233, 260,",
        "350, 440, 800, 189, 279, 288, 369,",
        "378, 459, 468, 477, 558, 567, 990",
      ],
    },
    {
      count: "TOTAL 9",
      numbers: [
        "199, 289, 379, 388, 469, 478, 559, 568,",
        "577, 667, 999, 666, 117, 126, 135, 144,",
        "180, 225, 234, 270, 360, 450, 900, 333",
      ],
    },
  ];

  return (
    <div className="pt-4 font-poppins bg-orange-300 min-h-screen">
      <div className=" flex items-center justify-center mb-4">
        <img src="/logo.gif" alt="" />
      </div>
      <div className=" border-4 rounded-md mx-4 shadow-lg text-center border-pink-600 py-4 px-2 mb-12">
        <p className=" text-lg font-semibold">
          पाना टोटल चार्ट पैनल टोटल चार्ट
          <br /> पाने के तीनो अंको के जोड़ को पाना टोटल कहते हैं
          <br /> जैसे पाना 120 में 1+2+0=3 आया तो 3 इस पाने का पैनल टोटल
          कहलायेगा
          <br /> लेकिन अगर टोटल 2 अंको में आता है जैसे
          <br /> 7+8+9=24 तो टोटल का दूसरा अंक जोकि 4 है
          <br /> तो 4 को इस पाने का पैनल टोटल मानेगे
          <br /> नोट - टोटल कॉउंट से अलग समीकरण है
        </p>
      </div>

      <h1 className=" text-4xl uppercase px-4 font-semibold font-playwrite text-center mb-4">
        SattaMatka555 Panel Total Chart
      </h1>

      <div className=" pb-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="border-4 rounded-md mx-4 mb-4 shadow-lg text-center border-blue-900 py-4 px-2"
          >
            <h3 className=" font-bold text-xl mb-4">{data.count}</h3>
            <p className=" text-2xl font-semibold text-red-600">
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

export default PanelTotalChart;
