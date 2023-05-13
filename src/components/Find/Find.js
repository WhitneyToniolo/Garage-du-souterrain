import React from "react";
import "../Find/find.css";
import adress from "../Find/AdresseGaragas.jpg";

function Find() {
    return (
        <div className="find">
            <div className="find__image-container">
                <a href="https://www.google.com/maps/place/Garage+du+Souterrain/@48.70542,2.3363936,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6761a0a9ffb51:0xb3d4c9460a53d113!8m2!3d48.7054165!4d2.3389685!16s%2Fg%2F1txc6by8" target="_blank">
                    <img src={adress} alt='map' />
                </a>
            </div>
            <div className="find__text-container">
                <p>Horaires </p>
                <p>Lundi 09h-12h30/13h30-17h30</p>
                <p>Mardi 09h-12h30/13h30-18h30</p>
                <p>Mercredi 09h-12h30/13h30-16h30</p>
                <p>Jeudi 09h-12h30/13h30-18h30</p>
                <p>Vendredi 09h-12h30/13h30-18h30</p>
                <p>Fermé le samedi et le dimanche</p>
            </div>
        </div>
    )
}

export default Find;

