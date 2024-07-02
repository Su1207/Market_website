import React, { useEffect } from "react";
import OtherPageFooter from "../components/OtherPageFooter";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className=" w-full bg-blue-50 min-h-screen font-poppins ">
      <div className=" text-4xl font-bold font-playwrite text-center px-4 py-8">
        Contact Details
      </div>

      <div className="flex md:flex-row flex-col md:items-start gap-8 px-4">
        <div className=" md:flex-1 ">
          <form className=" ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className=" text-sm text-gray-700">Customer Name*</label>
                <input
                  type="text"
                  placeholder="Please enter your name"
                  required
                  className="text-sm px-4 py-2 rounded-md outline-none w-full shadow-md"
                />
              </div>
              <div>
                <label className=" text-sm text-gray-700">Game Type*</label>
                <select className=" w-full px-4 py-2 text-sm rounded-md outline-none shadow-md">
                  <option value="mumbai side game">Mumbai Side Game</option>
                  <option value="delhi side game">Delhi Side Game</option>
                  <option value="start line game">Star Line Game</option>
                </select>
              </div>
              <div>
                <label className=" text-sm text-gray-700">Game Name*</label>
                <input
                  type="text"
                  placeholder="Please enter game you want"
                  required
                  className="text-sm px-4 py-2 rounded-md outline-none w-full shadow-md"
                />
              </div>
              <div>
                <label className=" text-sm text-gray-700">Email*</label>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  required
                  className="text-sm px-4 py-2 rounded-md outline-none w-full shadow-md"
                />
              </div>
              <div>
                <label className=" text-sm text-gray-700">Contact No*</label>
                <input
                  type="text"
                  placeholder="Please enter your name"
                  required
                  className="text-sm px-4 py-2 rounded-md outline-none w-full shadow-md"
                />
              </div>
            </div>

            <div className=" flex items-center my-3 gap-2">
              <input type="checkbox" />
              <p>Do saal se adhik ka record</p>
            </div>

            <button
              type="submit"
              className=" w-full bg-cyan-400 px-4 py-2 mt-3 text-sm rounded-md transition-all ease-in-out duration-300 shadow-md outline-none hover:bg-black text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className=" md:flex-1">
          <div className=" flex items-center text-sm gap-16">
            <div className=" flex items-center gap-2">
              <img src="/phone.png" alt="" className=" h-5" />
              <p>Phone</p>
            </div>
            <a className="hover:underline">+91-8888888888</a>
          </div>
          <div className=" flex items-center text-sm gap-16">
            <div className=" flex items-center gap-2">
              <img src="/email.png" alt="" className=" h-4" />
              <p>Email</p>
            </div>
            <a
              href={`mailto:sattaMatka555@gmail.com`}
              className="text-blue-600 hover:underline"
            >
              sattaMatka555@gmail.com
            </a>
          </div>
          <div className=" flex items-center text-sm mb-4 gap-12">
            <div className=" flex items-center gap-2">
              <img src="/map.png" alt="" className=" h-4" />
              <p>Address</p>
            </div>
            <address>
              Matka HeadOffice, Kalyan, Mumbai, Maharashtra 421301
            </address>
          </div>
          <div className=" flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.8461836448105!2d73.14748267374154!3d19.245534246631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795eb23cb541f%3A0x3b9b9485350d61f3!2sKalyan%20mumbai!5e0!3m2!1sen!2sin!4v1719346796142!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-auto h-auto sm:w-[90vw] md:w-[45vw] sm:h-[40vh]"
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" bg-orange-300 mx-4 p-4 border-red-500 rounded-md shadow-lg text-xs text-center my-8">
        Hello, all the Satta Matka Enthusiasts! Welcome to the contact details
        of our website SattaMatka555.Services If you are a customer and you have
        any queries, then you can fill out the below form here and then contact
        us.
        <br />
        <br />
        We will respond as soon as we check your email. So here you need to fill
        your name in the customer name field. Then you need to enter the game
        name you want to play specifically. Then you have to add your contact
        details here. It should be your phone number, and then you need to
        select the game type, and then your email, after that you can send us a
        message.
        <br />
        <br /> If you want to know our address, here is our physical address
        written on the right side, and here is our official email where you can
        send us an email for any important query. Here, you can see our pinpoint
        location on the Google map, and you can reach out if you want to see our
        office.
        <br />
        <br /> Okay, so this is our contact page, and here is our contact
        number, you can contact us by filling out the form and dont forget to
        enter all the details we asked for, otherwise your form will not be
        submitted.
        <br />
        <br /> That's all from this page. I hope you will contact us when you
        need anything from us. Don't hesitate to contact us. Our experts are
        available 24/7 to help you with your queries. Just don't forget to add
        proper details when you submit the form, and carefully fill it out.
        <br />
        <br /> All the entries are mandatory. You cannot skip any of the entry
        blanks. Make sure you fill out the form correctly, and we will respond
        to you as soon as we get your email. Thank you so much. We wish you very
        good luck with your next Satta Matka Games. May you always win!
      </div>

      <OtherPageFooter />
    </div>
  );
};

export default ContactPage;
