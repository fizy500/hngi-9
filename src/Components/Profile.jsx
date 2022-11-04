import React from "react";
import ProfilePhoto from "../Assets/profilePhoto.jpg";
import Sharemobile from "../Assets/sharemobile.svg";
import ShareDesk from "../Assets/sharedesktop.svg";

export default function Profile() {
  return (
    <section className="flex justify-center items-center  mx-8 relative ">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-20 h-20 rounded-[50%] object-cover "
          src={ProfilePhoto}
          alt=""
          id="profile__img"
        />
        <h2 className="font-bold text-gray-900 text-lg md:text-xl">
          Otuekong Idongesit
        </h2>
        <p className="invisible" id="slack">
          fizy_hector
        </p>
      </div>
      <a href="">
        <img
          src={ShareDesk}
          alt=""
          className="hidden md:block   absolute top-1 right-[30rem] w-10 h-10 rounded-[50%] border-gray-300 border-dotted border-2"
        />
      </a>
      <a href="">
        <img
          src={Sharemobile}
          alt=""
          className="block md:hidden  absolute top-3 right-5"
        />
      </a>
    </section>
  );
}
