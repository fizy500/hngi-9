import React from "react";
import Footer from "../Components/Footer";

export default function Contact() {
  const name = "Otuekong Idongesit";
  return (
    <section className="grid grid-rows-2 justify-center items-center px-5">
      <h2 className=" font-semibold   text-4xl text-gray-900">Contact Me</h2>
      <p className="font-normal text-lg text-gray-600 md:text-xl md:pr-8">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form action="" className="flex flex-col space-y-3">
        <label
          htmlFor="firstname"
          className=" text-sm  font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="firstname"
          id="first_name"
          placeholder="Enter your first name"
          className="p-3 border-solid border-2 border-gray-300 rounded-lg"
        />

        <label
          htmlFor="secondname"
          className=" text-sm  font-medium text-gray-700 mb-0"
        >
          Second name
        </label>
        <input
          type="text"
          name="secondname"
          id="last_name"
          placeholder="Enter your first name"
          className="p-3 border-solid border-2 border-gray-300 rounded-lg"
        />
        <label htmlFor="email" className=" text-sm  font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@email.com"
          className="p-3 border-solid border-2 border-gray-300 rounded-lg"
        />
        <label
          htmlFor="textarea"
          className=" text-sm  font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="textarea"
          id="message"
          cols="30"
          rows="8"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          className="p-3 border-solid border-2 border-gray-300 rounded-lg resize-none"
        ></textarea>
        <label htmlFor="checkbox">
          You agree to providing your data to {name} who may contact you.
        </label>
        <input type="checkbox" name="checkbox" value="Agree" />
        <button
          id="btn__submit"
          className="p-3 rounded-lg  text-base font-semibold text-white bg-[#1570EF] shadow-xs border-none"
        >
          Send message
        </button>
      </form>
      {/* <Footer /> */}
    </section>
  );
}
