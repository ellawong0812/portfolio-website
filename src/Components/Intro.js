import React from "react";
import My_image from "../Assets/My_image.JPG";
import "./Intro.css";
import { Emoji } from "emoji-mart";

const Intro = () => {
  return (
    <div>
      <div className="intro-container">
        <img className="intro-image" src={My_image} alt="My_image" />
        <div className="intro-content">
          <h2 className="intro-text">Hello, I am Ella Wong from HKUST</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="pointing-emoji">👉</div>
            <button
              className="intro-button"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1faOWZ7lxhI5Q_WP7_q0rsyKXO8cC49mD/view?usp=sharing"
                )
              }
            >
              VIEW MY CV
            </button>
          </div>
          <div>
            <p>
              I am a motivated individual, always eager to take on new
              challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
