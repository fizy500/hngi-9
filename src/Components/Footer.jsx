import React from "react";
import Zuri from "../Assets/Zuri.Internship_Logo.svg";
import I4G from "../Assets/I4G.svg";
export default function Footer() {
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
