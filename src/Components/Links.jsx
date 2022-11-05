import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
  return (
    <a
      href={props.link}
      className="bg-gray-200 text-center px-20 py-8 rounded-md shadow-sm focus:bg-gray-400  flex flex-col justify-center  items-center mx-8 my-4 "
      id={props.identifier}
      title={props.description}
    >
      <p className="text-sm md:text-lg font-medium text-gray-900">
        {props.title}
      </p>
    </a>
  );
}
