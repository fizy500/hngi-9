import React from "react";
import { Profile } from "./Components/Links";
import { Links } from "./Components/Links";
import { Logos } from "./Components/Links";
import { Footer } from "./Components/Links";
import data from "./data";
export default function App() {
  const links = data.map((item) => {
    return <Links key={item.id} {...item} />;
  });
  return (
    <div className="my-4 ">
      <Profile/>
      {links}
      <Logos />
      <Footer />
    </div>
  );
}
