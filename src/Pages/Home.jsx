import React from "react";

import Profile from "../Components/Profile";
import Links from "../Components/Links";
import Logos from "../Components/Links";
import Footer from "../Components/Footer";
import data from "../data";
export default function Home() {
  const links = data.map((item) => {
    return <Links key={item.id} {...item} />;
  });
  console.log(links);
  return (
    <div className="my-6 ">
      <Profile />
      {links}
      <Logos />
      <Footer />
    </div>
  );
}
