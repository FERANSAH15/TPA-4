
import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portopolio from "./pages/Portopolio";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portopolio" element={<Portopolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
