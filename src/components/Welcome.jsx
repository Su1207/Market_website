import React from "react";

const Welcome = () => {
  return (
    <div className=" px-4 pt-6">
      <div className="flex items-center justify-center">
        <img src="/logo.gif" alt="" />
      </div>
      <p className=" font-poppins font-semibold py-4 text-xl text-center">
        {["!! Welcome to SattaMatka555 !! Fast Results"].map((char, index) => (
          <span
            key={index}
            className="animate-colorChange inline-block"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char}
          </span>
        ))}
      </p>
      <p className=" border rounded-md p-4 text-center font-poppins text-sm border-red-500 leading-6 bg-orange-400 text-green-800 font-semibold">
        SattaMatka555 is the No. 1 Matka Sites welcomes you full-heartedly. Here
        below you can find the perfect guess by the top guesser along with the
        Fast Matka Result too. Aaj Ka Satta Kalyan Fix Single Jodi free update
        here you find top Matka Market of India Kalyan Main Milan Rajdhani*
        *kalyan Matka Tips *fast Matka Result *kalyan Main Rajdhani Matka Chart
        *Matka Guessing by SattaMatka555 By App Best Matka Site By SattaMatka555
      </p>
    </div>
  );
};

export default Welcome;
