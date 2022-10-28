import React from "react";
import ProfilePhoto from "../Assets/profilePhoto.jpg";
import Sharemobile from "../Assets/sharemobile.svg";
import ShareDesk from "../Assets/sharedesktop.svg";
import Slack from "../Assets/slack.svg";
import Github from "../Assets/github.svg";
import Zuri from "../Assets/Zuri.Internship_Logo.svg";
import I4G from "../Assets/I4G.svg";

export function Profile() {
  return (
    <section className="  flex justify-center items-center  mx-8 relative ">
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
        <p className="invisible" id="slack">fizy_hector</p>
      </div>
      <a href="">
        <img
          src={ShareDesk}
          alt=""
          className="hidden md:block  absolute top-1 right-[30rem] w-10 h-10 rounded-[50%] border-gray-300 border-dotted border-2"
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

export function Links(props) {
  return (
    <a
      href={props.link}
      className="bg-gray-200 text-center px-20 py-8 rounded-md shadow-sm focus:bg-gray-400  flex flex-col justify-center items-center mx-8 my-4 "
      id={props.identifier}
      title={props.description}
    >
      <p className="text-sm md:text-lg font-medium text-gray-900">
        {props.title}
      </p>
    </a>
  );
}

export function Logos() {
  return (
    <div className="flex justify-center items-center space-x-5 pb-8">
      <img src={Slack} alt="" />
      <img src={Github} alt="" />
    </div>
  );
}
export function Footer() {
  return (
    <footer className="w-full  px-5 md:grid grid-cols-1 justify-center items-center py-10">
      <div className="space-y-4 md:space-y-0 md:flex justify-between items-center py-4 border-t-2 border-gray-200">
        <img src={Zuri} alt="" />
        <p className="text-sm md:text-base text-gray-500 font-normal">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4G} alt="" />
      </div>
    </footer>
  );
}
