import React from "react";
import "./about.css";
import Who from "../About/who.jpg";

function About() {
  return (
    <div className="about-container">
        <div className="left-box">
      <h2>À propos de notre société</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
        dolor quis est dictum pulvinar. Etiam a justo sed leo fermentum
        imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; In ultrices dolor nec velit interdum,
        ut sagittis nisi malesuada. Sed eu tincidunt magna. Duis ac leo at
        magna tempor tincidunt eu vel quam.
      </p>
      <p>
        Donec id enim sit amet dolor ornare vestibulum at eu felis. Nunc
        scelerisque posuere elit in malesuada. Morbi vel elit nisl. Nullam
        posuere quam justo, et consectetur mauris pulvinar a. Suspendisse
        tristique euismod libero, nec faucibus quam sagittis ut. Praesent id
        enim eget magna dignissim facilisis sed eget libero. Sed vel nulla
        vestibulum, sollicitudin libero vitae, dictum ante.
      </p>
      </div>
      <img
          src={Who}
          className="who_img"
        />
    </div>
  );
}

export default About;
