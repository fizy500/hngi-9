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
        <Routes>
          <Route path="/hngi-9" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
