import React from "react";
import Footer from "../Components/Footer";

export default function Contact() {
  const name = "Otuekong Idongesit";
  return (
    <section className="space-y-20 py-8 mt-5">
      <div className="grid grid-rows-2 justify-center items-center px-5 0">
        <h2 className="font-semibold text-4xl text-gray-900">Contact Me</h2>
        <p className="font-normal text-lg text-gray-600 md:text-xl md:pr-8 mb-8">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form action="" className="flex flex-col space-y-3 w-full">
          <div className="space-y-3 md:flex  md:space-x-2 md:space-y-0">
            <div className="flex flex-col space-y-1 w-full">
              <label
                htmlFor="first_name"
                className=" text-sm  font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="first_name"
                required
                placeholder="Enter your first name"
                className="p-3 border-solid border-2 border-gray-300 rounded-lg outline-none focus:border-[#84CAFF]"
              />
            </div>

            <div className="flex flex-col space-y-1 w-full">
              <label
                htmlFor="last_name"
                className=" text-sm font-medium text-gray-700 mb-0"
              >
                Second name
              </label>
              <input
                type="text"
                name="secondname"
                id="last_name"
                required
                placeholder="Enter your first name"
                className="p-3 border-solid border-2 border-gray-300 rounded-lg outline-none focus:border-[#84CAFF]"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className=" text-sm  font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="yourname@email.com"
              className="p-3 border-solid border-2 border-gray-300 rounded-lg outline-none focus:border-[#84CAFF]"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="message"
              className=" text-sm  font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="textarea"
              id="message"
              required
              cols="30"
              rows="8"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="p-3 border-solid border-2 border-gray-300 rounded-lg resize-none outline-none focus:border-[#84CAFF]"
            />
          </div>

          <div className="flex justify-center items-baseline space-x-2 px-1">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value="Agree"
            />
            <label htmlFor="checkbox">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button
            id="btn__submit"
            className="p-3 rounded-lg  text-base font-semibold text-white bg-[#1570EF] shadow-xs border-none"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
