import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const OpenToCloseByDate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pt-4 font-poppins bg-orange-200 min-h-screen">
      <h1 className=" text-4xl font-bold text-center font-playwrite pt-4 pb-8">
        Shree Laxmi
      </h1>

      <div className=" border-4 rounded-md shadow-lg text-center border-pink-600 py-4 px-2 mb-12">
        <h1 className=" text-lg font-semibold text-center text-purple-900">
          धनवर्षा तारीख के हिसाब से ओपन तू क्लोज निकालने को धनवर्षा कहते हैं इस
          धनवर्षा को तारीख के हिसाब से बहुत कठोर परिश्रम के बाद हमने आपके लिए
          निकाला है यह धनवर्षा हर एक मारकेट पर लागू होगा
        </h1>
      </div>

      <h1 className=" text-2xl font-semibold font-playwrite text-center mb-4">
        FIX OPEN TO CLOSE BY DATE
      </h1>

      <div className=" overflow-x-auto px-4 w-full flex items-center">
        <table className=" border-collapse w-auto sm:w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border px-4 py-2 w-1/2 min-w-32">DATE (TAREK)</th>
              <th className="border px-4 py-2 w-1/2 min-w-32">
                OPEN TO CLOSE FIGURE (ANK)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: 1, figure: "4-5-9-8" },
              { date: 2, figure: "1-0-6-9" },
              { date: 3, figure: "2-5-6-7" },
              { date: 4, figure: "3-1-9-6" },
              { date: 5, figure: "4-2-3-7" },
              { date: 6, figure: "0-8-9-5" },
              { date: 7, figure: "7-0-2-6" },
              { date: 8, figure: "1-6-3-9" },
              { date: 9, figure: "2-7-8-5" },
              { date: 10, figure: "4-6-3-2" },
              { date: 11, figure: "5-4-9-1" },
              { date: 12, figure: "8-9-4-3" },
              { date: 13, figure: "4-5-6-0" },
              { date: 14, figure: "7-9-4-6" },
              { date: 15, figure: "0-8-9-5" },
              { date: 16, figure: "7-8-9-0" },
              { date: 17, figure: "4-5-2-3" },
              { date: 18, figure: "1-6-2-7" },
              { date: 19, figure: "4-8-5-7" },
              { date: 20, figure: "4-9-2-3" },
              { date: 21, figure: "6-9-3-1" },
              { date: 22, figure: "9-8-2-7" },
              { date: 23, figure: "2-5-4-3" },
              { date: 24, figure: "9-7-6-8" },
              { date: 25, figure: "4-9-3-7" },
              { date: 26, figure: "4-5-7-9" },
              { date: 27, figure: "5-0-1-6" },
              { date: 28, figure: "7-3-1-5" },
              { date: 29, figure: "2-0-3-8" },
              { date: 30, figure: "4-5-0-1" },
              { date: 31, figure: "6-3-2-1" },
            ].map((row, index) => (
              <tr className="odd:bg-gray-100 even:bg-white" key={row.date}>
                <td className="border px-4 py-2 text-center">{row.date}</td>
                <td className="border px-4 py-2 text-center">{row.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" text-center text-xs font-semibold text-gray-800 px-4 py-4">
        Hello everyone, how are you all the Satta Matka Enthusiasta, today I am
        very excited to welcome all of you on Dpboss.Services and today I will
        introduce you to our very important page which is Fix Open to Close by
        Date.
        <br />
        <br /> This concept is called Dhanvarsha, finding your open and close
        according to the current date of any month or year, is a concept which
        we call Dhanvarsha in the language of Satta Matka, so here is a fixed
        formula for we have already calculated it and it depends on the date you
        need to remember that the date is very important here and this
        Dhanvarsha concept works for every market and there is no difference
        between the markets, you can use it for every market and below you can
        find a breakdown of the dates and their open to close and fix.
        <br />
        <br /> Here is the date column on the left side and here is the open to
        close on the right side for date 1, there is 4-5-9-8, then for date 2,
        there is 1-0-6-9, then continuously for 3-4-5-6 all the Anks are
        mentioned here so whatever the month is whatever the year is these 31
        dates will remain same in the Dhanvarsha concept.
        <br />
        <br /> So, this page tells you and teaches you about what you need to
        know if you want to play games and this will help you a lot to find out
        your fixed open to close by the date, and this will keep you uplifted in
        the competition, and you will have the highest chances of winning than
        your competitors. So I hope you will love it and will utilize it to get
        better results.
        <br />
        <br /> It will apply to any market you love to play so I wish you the
        best and I hope you will win the big money using this Dhanvarsha concept
        Thank you.
      </div>

      <OtherPageFooter />
    </div>
  );
};

export default OpenToCloseByDate;
