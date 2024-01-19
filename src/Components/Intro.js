import React, { useEffect, useState } from "react";
import My_image from "../Assets/My_image.JPG";
import "./Intro.css";
import { Emoji } from "emoji-mart";
import { GithubLogo } from "@phosphor-icons/react";

const Intro = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className="intro-container">
        <img className="intro-image" src={My_image} alt="My_image" />
        <div className="intro-content">
          <h2 className={`welcome ${animate ? "animate-class" : ""}`}>
            Hello, I am Ella Wong!
          </h2>
          <p>
            I am currently pursuing a degree in{" "}
            <strong>Information Systems + Artificial Intelligence</strong> at
            the Hong Kong University of Science and Technology.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="pointing-emoji">👉</div>
            <button
              className="intro-button"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pEZnKZFBkdTtzdWsZoG51rSx5JMGhfIS/view?usp=sharing"
                )
              }
            >
              VIEW MY CV
            </button>
            <button
              className="intro-button"
              onClick={() => window.open("https://github.com/ellawong0812")}
            >
              VIEW MY GITHUB <GithubLogo size={20} />
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
