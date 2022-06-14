import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About.js";
import User from "./User";
export default function App() {
  return (
    <>
      <navbar>
        <Link to="/about">about</Link>
        <Link to="/users/ravid">name</Link>
      </navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:name" element={<User />} />
      </Routes>
    </>
  );
}
