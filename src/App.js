import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css'
import Services from "./components/Services/Services.js";
import About from "./components/About/About";
import Find from "./components/Find/Find";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import background from "./3253510.jpg"

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <Header />
        <Services />
        <About />
        <Find />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


