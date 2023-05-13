import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css'
import Services from "./components/Services/Services.js";
import About from "./components/About/About";
import Find from "./components/Find/Find";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Services />
        <About />
        <Find />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;


