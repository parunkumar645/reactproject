import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default function Mainconnect() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-dark p-5 d-flex justify-content-around">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
          <Link
            to="/Contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
