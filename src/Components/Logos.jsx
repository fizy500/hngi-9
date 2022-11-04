import React from "react";
import Slack from "../Assets/slack.svg";
import Github from "../Assets/github.svg";

export default function Logos() {
  return (
    <div className="flex justify-center items-center space-x-5 pb-8">
      <img src={Slack} alt="" />
      <img src={Github} alt="" />
    </div>
  );
}
