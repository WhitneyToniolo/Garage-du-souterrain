import React from "react";
import cle from "../Services/2.jpg"; 
import "../Services/services.css"; 




function Services() {
  return (
    <div className="services">
      <div className="services__image-container">
        <img
          src={cle}
          alt="Losange"
          className="services__diamond"
        />
      </div>
      <div className="services__text">
        <p>
          <ul id="list__services">
            <li>⇝ Entretien et réparation de moteurs</li>
            <li>⇝ Changement d'huile et de filtres</li>
            <li>⇝ Réparation et remplacement de pneus</li>
            <li>⇝ Alignement de roues</li>
            <li>⇝ Inspection de freins et remplacement de plaquettes</li>
            <li>⇝ Réparation de systèmes de suspension</li>
            <li>⇝  Réparation de la climatisation et du système de chauffage</li>
          </ul>

        </p>
      </div>
      <div className="separation">

      </div>
    </div>
  );
}

export default Services;

