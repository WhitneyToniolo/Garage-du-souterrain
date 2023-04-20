import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css'
import Services from "./components/Services/Services.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Services />
      </div>
    </BrowserRouter>
  );
}

export default App;


