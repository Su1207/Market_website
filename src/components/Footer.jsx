import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mx-4 my-8 border rounded-md border-red-500 p-4">
        <h2 className=" text-center text-xl font-bold font-poppins">
          Disclaimer
        </h2>
        <p className=" text-center text-xs font-semibold font-poppins p-4 leading-6 ">
          Visiting this site and browsing it is strictly recommended at your own
          risk. Every information available here is only according to
          informational purpose and based on astrology and number calculations.
          We are no associated or affiliated with any illegal Matka business. We
          make sure we follow all rules and regulations of the regions where you
          are accessing the website. There are also chances that the website may
          be banned in your area and after that if you are using it, you are
          solely dependable and responsible for any damage, loss or legal action
          taken. If you are the one who does not like our disclaimer it is
          advised that you leave our website immediately. Copying of any
          information/contents posted on the website is strictly prohibited and
          against the law.
        </p>
      </div>
      <div className=" p-4 bg-black text-white">
        <h2 className=" text-xl font-bold font-poppins text-center">
          POWERED BY <span className=" font-playwrite">Shree Laxmi</span>
        </h2>
        <div className=" flex flex-col gap-2 justify-center items-center text-sm mt-6">
          <div>&copy; 2011-2024 shree laxmi</div>
          <div className=" flex items-center gap-2">
            <div className=" cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out">
              About us
            </div>
            <div className=" border h-3 mt-1 w-0"></div>
            <div className=" cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out">
              Contact us
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out">
              Privacy & Policy
            </div>
            <div className=" border h-3 mt-1 w-0"></div>
            <div className=" cursor-pointer hover:text-blue-500 transition-all duration-300 ease-out">
              Terms and Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
