import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Yes Yea</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Home />
      {/* <Contact /> */}
    </div>
  );
}
