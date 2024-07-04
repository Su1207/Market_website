import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";

const GuessingForum = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const urlRef = ref(database, "ADMIN/AUTH/URL");
    const unsub = onValue(urlRef, (snapshot) => {
      if (snapshot.exists()) {
        setUrl(snapshot.val());
      }
    });

    return () => unsub();
  }, []);

  const handleUrl = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="py-4 font-poppins bg-orange-300 min-h-screen">
      <div className=" flex items-center justify-center mb-4">
        <img src="/logo.gif" alt="" />
      </div>
      <div className=" border-2 rounded-md shadow-lg text-center border-pink-600 px-2 py-4 mb-8">
        <h1 className=" text-3xl font-semibold text-center mb-6">
          SattaMatka555 Satta Matka Guessing Kalyan Main Bazar Madhur Matka
        </h1>

        <p className=" text-sm font-semibold text-center ">
          SattaMatka555 Satta Matka Guessing Forum For Kalyan Milan Main Bazar
          Rajdhani Madhur Matka Time Bazar Morning Madhur Sridevi All Matka
          Guessing Open To Close Free Ank Kalyan Fix Jodi Aaj Ke Liye Today
          Locky Fix Matka Satta Number Satta Matka 143 24 19Games satta king
          Matta Batta Online Matka Play Trusted Best सात्त मटका कल्याण मधुर मटका
          रेसुल्ट ऑनलाइन प्ले
        </p>

        <p className=" text-sm font-semibold text-center mt-4">
          Duniya Ko Dikhao Apni Guessing Ka Jalwa, Guessing Post Karne Ke Liye
          Application Download Kare
        </p>

        <button
          onClick={handleUrl}
          className=" bg-black border-2 rounded-md mt-4 px-3 py-2 text-sm text-white"
        >
          Click Here to Download App
        </button>
      </div>

      <div className=" border-2 rounded-md shadow-lg text-center border-pink-600 px-2 py-4 mb-8">
        <h1 className=" text-xl font-semibold text-center mb-2">
          -: Posting Rules :-
        </h1>
        <p className=" text-sm font-semibold text-center ">
          3 OPEN YA CLOSE
          <br /> 6 JODI
          <br /> AUR 8 PANNA
          <br /> AUR RESULT TIME SE 15 MIN PHELE GAME POST KARNA HOGA....!!!!
          <br /> Dont Mention Date Or Time In Your Post.
        </p>
        <div className=" mx-auto mt-10 bg-yellow-400 border-2 border-pink-500 rounded-lg">
          <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white text-center py-2 rounded-t-lg">
            <h2 className="text-2xl font-bold">Forum Rules</h2>
          </div>
          <ul className="list-decimal list-inside p-5 space-y-2 text-purple-700 font-semibold">
            <li>Don't Post Wrong Result.</li>
            <li>Dont Post Mobile Number Or Any Other Website Link.</li>
            <li>Post Your Guessing Daily.</li>
            <li>Don't Post More Than 4 Single Dijit.</li>
            <li>Don't Use Abbusive Language In Forum.</li>
          </ul>
          <p className="text-center text-pink-600 font-semibold pb-3">
            Follow All These Other Wise Your ID & IP Would Be{" "}
            <span className="font-bold">Blocked Permanently.</span>
          </p>
        </div>{" "}
      </div>

      <div className=" border-2 rounded-md shadow-lg text-center border-pink-600 px-2 py-4 mb-8">
        <p className=" text-purple-700 font-semibold">
          Play Matka Online
          <br /> 101% Trusted - Fast Withdrawl
          <br />
          <span className=" text-red-600 cursor-pointer">Download Now</span>
        </p>
      </div>

      <div className=" mx-auto mt-10 bg-orange-200 border-2 border-pink-500 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center bg-red-700 text-white py-2 px-4 rounded-t-lg">
          <span className="text-lg font-bold">arunt43</span>
          <span className="text-sm">02 Jul 2024 03:53 PM</span>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-center font-bold text-xl">MILAN DAY CLOSE</h2>
          <div className="mt-4 text-center text-sm font-semibold text-blue-950">
            <h3 className="font-bold">MILAN DAY</h3>
            <p className="mt-2">=============6</p>
            <p className="mt-2">MIS_5/2</p>
            <div className="mt-4">
              <p>268/267</p>
              <p>138/367</p>
              <p>Closing</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="flex justify-between items-center bg-green-500 py-2 px-4 rounded-b-lg">
          <span className="bg-green-600 text-white px-4 py-1 rounded">
            [Quote]
          </span>
          <span className="bg-cyan-400 text-white px-4 py-1 rounded">
            [Top]
          </span>
          <span className="bg-blue-400 text-white px-4 py-1 rounded">
            [Down]
          </span>
        </div> */}
      </div>

      <div className=" mx-auto mt-10 bg-orange-200 border-2 border-pink-500 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center bg-red-700 text-white py-2 px-4 rounded-t-lg">
          <span className="text-lg font-bold">arunt43</span>
          <span className="text-sm">02 Jul 2024 03:53 PM</span>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-center font-bold text-xl">KALYAN</h2>
          <div className="mt-4 text-center text-sm font-semibold text-blue-950">
            <h3 className="font-bold">KALYAN</h3>
            <p className="mt-2">=============8</p>
            <p className="mt-2">MIS__0/7</p>
            <div className="mt-4">
              <p>890/368</p>
              <p>367/569</p>
              <p>76/08</p>
              <p className="mt-2 font-bold">Opening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessingForum;
