import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const MatkaJodiFamilyChart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const data = [
    { family: "12 FAMILY", numbers: "12,17,21,26,62,67,71,76" },
    { family: "13 FAMILY", numbers: "13,18,31,36,63,68,81,86" },
    { family: "14 FAMILY", numbers: "14,19,41,46,64,69,91,96" },
    { family: "15 FAMILY", numbers: "01,06,10,15,51,56,60,65" },
    { family: "23 FAMILY", numbers: "23,28,32,37,73,78,82,87" },
    { family: "24 FAMILY", numbers: "24,29,42,47,74,79,92,97" },
    { family: "25 FAMILY", numbers: "02,07,20,25,52,57,70,75" },
    { family: "34 FAMILY", numbers: "34,39,43,48,84,89,93,98" },
    { family: "35 FAMILY", numbers: "03,08,30,35,53,58,80,85" },
    { family: "45 FAMILY", numbers: "04,09,40,45,54,59,90,95" },
    { family: "HALF RED", numbers: "05,16,27,38,49,50,61,72,83,94" },
    { family: "FULL RED", numbers: "00,11,22,33,44,55,66,77,88,99" },
  ];
  return (
    <div className="pt-4 font-poppins bg-orange-200 min-h-screen">
      <h1 className=" text-4xl font-bold text-center font-playwrite pt-4 pb-8">
        SattaMatka555
      </h1>
      <div className=" border-4 rounded-md shadow-lg text-center border-pink-600 py-4 px-2 mb-12">
        <h1 className=" text-3xl font-semibold text-center mb-4">
          Matka Jodi Family Chart
        </h1>
        <h3 className=" text-2xl font-semibold text-center mb-2">
          Matka Jodi Family Record
        </h3>
        <p>
          जोड़ियों को उनके कट के आधार पर 11 समूहों में बांटा जा सकता है जिसे मटका
          जोड़ी की फेमिली कहते है एक ही फेमिली की किसी जोड़ी को सम्बंधित जोड़ी और
          लगभग एक जैसा माना जाता है मटका छेत्र में यह कहा और माना जाता है की
          जोड़ियों को उनके फॅमिली जोड़ी के हिसाब से बनाया जाता है उदाहरण के लिए -
          आज 31 बनने बाला है और सायद ये 86 बन जाये या फिर 13 की फॅमिली की कोई भी
          जोड़ी बन जाये जोड़ी का कट सिर्फ उनकी फॅमिली जोड़ी में से बन सकता है
        </p>
      </div>

      <h1 className=" text-2xl font-semibold font-playwrite text-center mb-4">
        MATKA JODI FAMILY CHART
      </h1>
      <div className=" border-4 rounded-md shadow-lg text-center border-blue-900 p-2 px-4 mb-8">
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col justify-center items-center gap-1 py-4">
                <p className="text-base text-center">{item.family}</p>
                <p className="text-blue-700 text-xl font-semibold text-center">
                  {item.numbers}
                </p>
              </div>
              <div className="border border-blue-900 h-0 mx-6"></div>
            </div>
          ))}
        </div>
      </div>

      <div className=" text-center text-xs font-semibold text-gray-800 px-4 py-4">
        Hello, all the Satta Matka players on our platform
        SattaMatka555.services Today we are exploring a very important Jodi
        Chart. This is called the Matka Jodi Family Chart. So, according to the
        definition of the Matka Jodi Family Record, the Jodis, which are called
        the pairs of two numbers, can be divided into 11 different types of
        groups, based on their cut.
        <br />
        <br /> So, whenever Jodis of the same family, they are considered to be
        related together, and they are almost the same. They have very minor
        differences. In terms of Satta Matka, we all know and believe that the
        pairs, the Jodis of the same family are named according to their family,
        for example, Today 31 is going to be made and maybe it becomes over 86,
        or any pair from the family 13 can be made, the cut of the pair can be
        made only from their family pair.
        <br />
        <br /> This is a simple definition. So, now let's move on to the Matka
        Jodi Family chart, as you can see, here are some different families, so
        the first family name is 12 family, and here you can find 8 Jodis, then
        we have 13 Family here, again 8 Jodis, then 14 family 8 Jodis, Then 15
        family, 23 family 24 family, 25 family 34, 35, 45, Half red and full
        red.
        <br />
        <br /> These are the families of the Jodis, and their mentioned Jodis,
        and the concept of the Matka Family Jodi, I have already told you
        earlier, so this is all about the Matka Jodi Family Chart. This is very
        important if you are a regular player or even a seasoned player.
        <br />
        <br /> You need to understand this concept, and then act upon it while
        you are playing the games. This can make you win a lot of big games in
        the Satta Matka. Especially if you are a Jodi lover, Good Luck, thank
        you for visiting us, wish you always win!
      </div>

      <OtherPageFooter />
    </div>
  );
};

export default MatkaJodiFamilyChart;
