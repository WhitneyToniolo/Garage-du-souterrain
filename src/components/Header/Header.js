import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Header/Entretien2.png";
import "../Header/header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Header" />
      <nav className="header__navigation">
        <ul>
          <li>
          <ScrollLink to="header__image" smooth={true} duration={500}>Accueil</ScrollLink>
          </li>
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
      <h1 className="header__title">Bienvenue au Garage du Souterrain</h1>
      <h2 className="header__titlelittle">34 Rue de l'Eglise 91420 MORANGIS</h2>
      <h3 className="header__titleNumber">01 64 48 29 35</h3>
    </header>
  );
}

export default Header;
