import React from "react";
export default function Links() {
  return (
    <section className=" w-full   px-3 py-5">
      <div className="grid grid-rows-6 space-y-3 text-center ">
        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900">Twitter Link</p>
          <p className="">Description</p>
        </a>

        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900">Zuri Team</p>
          <p className="">Description</p>
        </a>

        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900">Zuri Books</p>
          <p className="">Description</p>
        </a>

        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900">Python Books</p>
          <p className="">Description</p>
        </a>

        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900">
            {" "}
            Background Check for Coders
          </p>
          <p className="">Description</p>
        </a>

        <a
          href=""
          className="bg-gray-200 px-20 py-8 rounded-md hover:bg-gray-400  flex flex-col justify-center items-center "
        >
          <p className="text-lg font-medium text-gray-900"> Design Books</p>
          <p className="">Description</p>
        </a>
      </div>
    </section>
  );
}
