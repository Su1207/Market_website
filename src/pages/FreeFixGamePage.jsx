import React from "react";

const FreeFixGamePage = () => {
  const currentDate = new Date();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  const date = `${day}/${month}/${year}`;
  return (
    <div className="p-4  font-poppins bg-orange-200 min-h-screen">
      <div className="border border-red-600 shadow-lg py-4 rounded-md">
        <h1 className=" text-4xl font-bold text-center font-playwrite py-4">
          Shree Laxmi
        </h1>

        <h1 className=" text-4xl font-semibold text-center py-8">
          OPEN TO CLOSE FIX ANK
        </h1>

        <h1 className=" text-lg bg-fuchsia-600 border-b text-white rounded-t-md font-semibold text-center py-2">
          ✔ DATE: {date}
        </h1>
        <h1 className=" text-lg bg-pink-600 text-white border-b font-semibold text-center py-2">
          FREE GUESSING DAILY
        </h1>
        <h1 className=" text-lg bg-rose-500 text-white rounded-b-md mb-4 font-semibold text-center py-2">
          OPEN TO CLOSE FIX ANK
        </h1>

        <div className=" mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ ROSE BAZAR DAY
          </div>
          <div className=" flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-5-8-4</p>
            <p>146-137-159-230-170-369-220-455-238-120</p>
            <p>15-85-41-81-37-13-91-79</p>
            <p> 7-3-1-9</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ PUNA BAZAR
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>2-6-9-0</p>
            <p>129-237-268-367-126-450-145-460</p>
            <p>20-26-62-69-92-96-02-06</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ SUPREME DAY
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>2-4-7-8</p>
            <p>110-400-223-800</p>
            <p>21-26-41-46-71-76-81-86</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ SRIDEVI NIGHT
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-8-9-0</p>
            <p>399-224-199-244</p>
            <p>13-18-83-98-94-99-01-06</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ KALYAN NIGHT
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-5-8-4</p>
            <p>146-137-159-230-170-369-220-455-238-120</p>
            <p>15-85-41-81-37-13-91-79</p>
            <p>7-3-1-9</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ OLD MAIN MUMBAI
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>7=9=4</p>
            <p>269=250=149=590=340=234</p>
            <p>71=76=41=46=91=96</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ SUPREME NIGHT
          </div>
          <div className="flex p-2 h-[6rem] bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            {/* <!-- Add content if needed --> */}
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ PADMAVATI
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-6-8-0</p>
            <p>560-123-558-127</p>
            <p>14-63-80-09</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MAMA BHANJA
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>2-6-7-4</p>
            <p>300-160-250-237</p>
            <p>45-46-65-60-78-79-01-91</p>
            <p>4-5-8-9</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ GOA DAY
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-6-3-8</p>
            <p>560-146-490-580</p>
            <p>13-31-68-86</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ GOA NIGHT
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>0-6-1-5</p>
            <p>389-338-223-144</p>
            <p>03-56-17-65</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MADHUR DAY
          </div>
          <div className="flex p-2 h-[6rem] bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            {/* <!-- Add content if needed --> */}
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MADHUR NIGHT
          </div>
          <div className="flex p-2 h-[6rem] bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            {/* Add content if needed */}
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ KARNATAKA DAY
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>4-5-8</p>
            <p>130-235-456-890-350-478</p>
            <p>49-47-57-59-80-89</p>
            <p>0-7-9</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MAIN MORNING
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>3-5-9-0</p>
            <p>346-258-478-569</p>
            <p>39-51-92-04-76-45</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ KUBER
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>0-5-3-8</p>
            <p>127-136-159-258-238-346-125-279</p>
            <p>38-85-03-35-55-33-00-88-80-03</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ BIGCASH
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>0-5-1-6</p>
            <p>334-339-889-488-457-579</p>
            <p>10-15-60-65-51-56-01-06</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ SRIDEVI
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>2-4-5-0</p>
            <p>129-130-456-127</p>
            <p>22-27-44-49-55-50-00-05</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ SUPREME MORNING
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>1-2-3</p>
            <p>290-390-490</p>
            <p>1-2-3</p>
            <p>3-2-1</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MUMBAI MORNING
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>6-8</p>
            <p>116-125-114-150</p>
            <p>68-63-81-86</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MAIN KALYAN
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>9-4-8-3</p>
            <p>378-239-170-346</p>
            <p>92-97-43-48-86-81-34-39</p>
            <p>3-7-9</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-xl bg-gradient-to-b from-rose-600 to-red-500 border-b-2 text-white rounded-t-md font-semibold text-center py-2">
            ↪ MUMBAI PAREL
          </div>
          <div className="flex p-2 bg-gradient-to-b from-blue-950 to-blue-600 border-b-2 rounded-b-md text-white text-lg items-center flex-col justify-center font-semibold">
            <p>4-5-6</p>
            <p>130-230-140-400-240-123</p>
            <p>41-40-53-51-61-66</p>
            <p>1-3-0</p>
          </div>
        </div>

        <div className=" text-center text-xs font-semibold text-gray-800 px-4">
          Hello, all the Enthusiasts Of The Satta Matka. Today I welcome you to
          our platform Dpboss.Services and this page is very special, it is the
          Matka Free Open Fix Ank. So, here you will learn Open To Close Fix Ank
          for the date, so here you can see the first date is given, and it is
          today's date then 'free guessing', you will learn about the Open To
          Close Fix Ank.
          <br />
          <br /> Now, you will understand the entire thing, below is the
          breakdown of the different markets, so the first market is Rose Bazar
          Day, you will see some figures here in the first line, we have 4
          single digit pairs separated by dashes, and then we have 10 three
          digit numbers separated by dashes, after that, we have 8 double-digit
          numbers separated by dashes, yet again single digit 4 Numbers
          separated by dashes.
          <br />
          <br /> So, this is for Rose Bazar Day, you need to understand that the
          combinations can be different in different markets, and you should
          also remember the figures and their belonging markets, then we have
          the next market, which is the Puna Bazar, and we have a different
          combination here, different from the previous Rose Bazar Day Market,
          then we have Supreme Market with different figures, then Sridevi Night
          with different, then Kalyan Night with different Figures.
          <br />
          <br /> Similarly, Old Main Mumbai, Supreme Night, Padmavati, Mama
          Bhanja, Goa Day, Goa Night, Madhur Day, Madhur Night, Karnataka Day,
          Main Morning, Kuber, Supreme Morning, Mumbai Morning, Main Kalyan,
          Mumbai Day, and that's it.
          <br />
          <br /> So these are the markets, and their fixed Figure Anks are given
          in various combinations. So I hope you understand this concept, and
          this is going to help you a lot to understand the Open To Close Fixed
          Anks, and they will help you win a lot of money in this thrilling and
          exciting world of Satta Matka. Good Luck, may you always win!
        </div>
      </div>
    </div>
  );
};

export default FreeFixGamePage;
