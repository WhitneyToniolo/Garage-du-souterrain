import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Header/vuegarage.jpg";
import "../Header/header.css";
import G from "../Header/lettreG.jpg"

function Header() {
  return (
    <header className="header">

      <nav className="header__navigation"> 
        <div className="title__site"><img className="header__imageLetter" src={G} alt="Header" />arage du Souterrain <br/> 01 64 48 29 35</div>  
    
        <ul className="list__site">
          <li>
            <ScrollLink to="services" smooth={true} duration={500}>
              Nos services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about-container" smooth={true} duration={500}>A propos</ScrollLink>
          </li>
          <li>
          <ScrollLink to="find" smooth={true} duration={500}>Nous trouver</ScrollLink>
          </li>
          <li>
          <ScrollLink to="container__form" smooth={true} duration={500}>Contact</ScrollLink>
          </li>
        </ul>
      </nav>
      <img className="header__image" src={logo} alt="Header" />
    </header>
  );
}

export default Header;
