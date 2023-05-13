import React from "react";
import { Link } from "react-router-dom";
import logo from "../Header/Entretien2.png"
import '../Header/header.css'


function Header() {
  return (
    <header className="header">
        <img className="header__image" src={logo} alt="Header" />
      <nav className="header__navigation">

        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
          <a href="#services">Nos services</a>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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