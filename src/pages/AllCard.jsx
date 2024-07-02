import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const AllCard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const datas = [
    { count: "1", numbers: ["128 137 236 678", "245 290 470 579"] },
    { count: "2", numbers: ["129 147 246 679", "345 390 480 589"] },
    { count: "3", numbers: ["120 157 256 670", "139 148 346 689"] },
    { count: "4", numbers: ["130 158 356 680", "239 248 347 789"] },
    { count: "5", numbers: ["140 159 456 690", "230 258 357 780"] },
    { count: "6", numbers: ["123 178 268 367", "240 259 457 790"] },
    { count: "7", numbers: ["124 179 269 467", "340 359 458 890"] },
    { count: "8", numbers: ["125 170 260 567", "134 189 369 468"] },
    { count: "9", numbers: ["135 180 360 568", "234 289 379 478"] },
    { count: "0", numbers: ["145 190 460 569", "235 280 370 578"] },
  ];

  const datas1 = [
    {
      count: "777 !!-1-!! 100",
      numbers: [
        "128-137-146-236-245-290-380-470-489-560",
        "678-579-119-155-227-335-344-399-588-669",
      ],
    },
    {
      count: "444 !!-2-!! 200",
      numbers: [
        "129-138-147-156-237-246-345-390-480-570",
        "679-589-110-228-255-336-499-660-688-778",
      ],
    },
    {
      count: "111 !!-3-!! 300",
      numbers: [
        "120-139-148-157-238-247-256-346-490-580",
        "670-689-166-229-337-355-445-599-779-788",
      ],
    },
    {
      count: "888 !!-4-!! 400",
      numbers: [
        "130-149-158-167-239-248-257-347-356-590",
        "680-789-112-220-266-338-446-455-699-770",
      ],
    },
    {
      count: "555 !!-5-!! 500",
      numbers: [
        "140-159-168-230-249-258-267-348-357-456",
        "690-780-113-122-177-339-366-447-799-889",
      ],
    },
    {
      count: "222 !!-6-!! 600",
      numbers: [
        "123-150-169-178-240-259-268-349-358-457",
        "367-790-114-277-330-448-466-556-880-899",
      ],
    },
    {
      count: "999 !!-7-!! 700",
      numbers: [
        "124-160-179-250-269-278-340-359-368-458",
        "467-890-115-133-188-223-377-449-557-566",
      ],
    },
    {
      count: "666 !!-8-!! 800",
      numbers: [
        "125-134-170-189-260-279-350-369-378-459",
        "567-468-116-224-233-288-440-477-558-990",
      ],
    },
    {
      count: "333 !!-9-!! 900",
      numbers: [
        "126-135-180-234-270-289-360-379-450-469",
        "117-478-568-144-199-225-388-559-577-667",
      ],
    },
    {
      count: "000 !!-0-!! 550",
      numbers: [
        "127-136-145-190-235-280-370-389-460-479",
        "569-578-118-226-244-299-334-488-668-677",
      ],
    },
  ];

  return (
    <div className="pt-4 font-poppins bg-orange-200 min-h-screen">
      <div className=" px-4">
        <h1 className=" text-4xl font-bold px-4 text-center font-playwrite pt-4 pb-8">
          SattaMatka555
        </h1>

        <h2 className=" text-3xl font-semibold text-center uppercase pt-4 pb-2">
          All 22 Card Panna panel patti chart
        </h2>

        <div className="pb-4 ">
          <div className=" p-4 border-2 border-purple-800 shadow-xl rounded-md text-center">
            {datas.map((data, index) => (
              <div key={index} className=" mb-2 text-xl font-semibold">
                <div className=" mb-1">{data.count}</div>
                <div>
                  {data.numbers.map((number, key) => (
                    <div key={key} className="text-purple-800">
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 text-center text-white text-2xl font-bold w-full bg-orange-600 py-3 px-4 rounded-md shadow-lg">
            All 22 Satta Matka Card
          </div>

          <div className=" border-2 border-orange-900 shadow-xl rounded-md text-center p-4">
            {datas1.map((data, index) => (
              <div key={index} className=" mb-2 text-xl font-semibold">
                <div className=" mb-1">{data.count}</div>
                <div>
                  {data.numbers.map((number, key) => (
                    <div
                      key={key}
                      className="text-orange-900 text-lg drop-shadow-md"
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" text-center text-xs font-semibold text-gray-800 px-4 pb-4">
          Hello everyone, how are you all? I hope you all are doing well.
          Welcome to SattaMatka555.Services Today we are exploring a very
          important page of our website, it will help you a lot to learn the
          Panna Panel and Patti Chart. So this page includes all 22 cards of
          Panna Panel Patti, in the form of a chart.
          <br />
          <br /> When you visit this page, you see on the top, there are panels
          written for every single digit like 1, 2, 3, 4, 5, 6, 7, 8, 9, and 0,
          and then below it, you will find another section, where you can see
          all 22 Satta Matka cards, and here you will find the complete sequence
          and the combinations of the panels.
          <br />
          <br /> Here the first entry is 777, then 1, and then 100. So this is a
          complete formula of the panel, and below you will see a long figure
          written which is 128, 137, 146, 236, 245, 290, 380, 470, 489, 550,
          678, 579, 119, 155, 227, 335, 344, 399, 588, 669, then similarly, we
          have many more combinations of them.
          <br />
          <br /> These combinations, formulas, and calculated figures of the
          panels are very important if you are a panel lover, they will help you
          a lot to understand the basics of the panel, how they are formed, how
          you can pick the correct figure for the panel to win it, and win a lot
          of money in Satta Matka panel games.
          <br />
          <br /> So these are called all 22 Panna Panel, and Patti Chart, and
          these are very important if you are a panel lover, they will really
          help you to improve your understanding of the panels. So that you will
          be able to pick a winning panel for your next big game and you will
          definitely make a lot of money from that. Thank you. I hope you always
          win here. Good Luck!
        </div>
      </div>

      <OtherPageFooter />
    </div>
  );
};

export default AllCard;
