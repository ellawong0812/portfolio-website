import React, { useState, useEffect } from "react";
import "./About.css";
import life7 from "../Assets/life7.JPG";
import life8 from "../Assets/life8.png";
import life9 from "../Assets/life9.JPG";
import life10 from "../Assets/life10.JPG";
import azure from "../Assets/azure.png";
import green from "../Assets/green.png";
import PMIHK from "../Assets/PMIHK.jpeg";
import MTR2 from "../Assets/MTR2.png";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const About = () => {
  const images = [PMIHK, MTR2, life7, life8, life9, life10];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Me 👩‍💻</h2>
        <p>
          I am a dedicated and passionate software developer with a strong
          foundation in{" "}
          <strong>Information Systems and Artificial Intelligence</strong>. My
          journey in tech has been driven by curiosity, problem-solving, and
          continuous learning.
        </p>
        <p>
          I thrive on <strong>building innovative solutions</strong> that
          enhance efficiency and optimize user experiences. My expertise spans
          across various programming languages, database management, and system
          architecture.
        </p>
        <p>
          In addition to my technical skills, I am an{" "}
          <strong>avid learner</strong> who actively participates in
          competitions and certification programs to stay ahead in the evolving
          tech landscape.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills & Expertise</h2>
        <p>
          Here are some of the technologies and tools I have experience with:
        </p>
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>Visual Basic</li>
          <li>SQLite & MySQL</li>
          <li>React JS & React Native</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            🔵 <strong>Programmer</strong> - iGears Technology Limited (2024
            Winter)
          </li>
          <li>
            🔵 <strong>Summer Intern</strong> - MTR Corporation Limited (2024
            Summerr)
          </li>
          <li>
            🔵 <strong>Software Engineer</strong> - Beijing YingKe Law Firm
            Tianjin Office (2023 Summer)
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Competitions & Achievements</h2>
        <ul>
          <li>🏆 Finalist - PMIHK Project Management Case Competition 2024</li>
          <li>
            🏆 Semi-finalist - Joint University Outstanding Marketing Award
            2022-2023
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Certifications</h2>
        <div className="cert-container">
          <a href="https://www.credly.com/badges/23629085-fcca-454a-8abd-b09a3880a5ce/public_url">
            <img className="cert-img" src={azure} alt="Azure Certification" />
          </a>
          <p>Microsoft Certification: Azure Fundamentals AZ-900</p>
          <img className="cert-img" src={green} alt="Green Skills Passport" />
          <p>EY & Microsoft: Green Skills Passport Certification</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Gallery</h2>
        <div className="image-slider">
          <button className="slider-button" onClick={previousImage}>
            <ArrowLeft size={24} />
          </button>
          <img
            className="slider-image"
            src={images[currentImageIndex]}
            alt="Life Moments"
          />
          <button className="slider-button" onClick={nextImage}>
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
