import React, { useState, useEffect } from "react";
import "./About.css"; // Import the CSS file
//import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-bootstrap/Carousel';
import life1 from "../Assets/life1.JPG";
import life2 from "../Assets/life2.png";
import life3 from "../Assets/life3.jpg";
import life4 from "../Assets/life4.jpg";
import life5 from "../Assets/life5.jpg";
import life6 from "../Assets/life6.JPG";
import azure from "../Assets/azure.png";
import green from "../Assets/green.png";
import PMIHK from "../Assets/PMIHK.jpeg";

const About = () => {
  const images = [life1, life2, life3, life4, life5, life6];
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

  //automatically switch to the next image at a specified time interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1000);
    return () => {
      //clean up the interval when the component unmounts or when the currentImageIndex dependency changes
      clearInterval(interval);
    };
  }, [currentImageIndex]);
  //the effect will be re-run whenever the currentImageIndex value changes
  //the interval will be cleared and set up again with the updated value.

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>Something about Me!👩‍💻</h2>
        <p>
          With a <strong>passion for programming</strong>, I dedicate my spare
          time to honing my coding skills and staying up-to-date with the latest
          industry trends.
        </p>
        <p>
          Throughout my academic journey, I have consistently demonstrated a
          strong aptitude for
          <strong> problem-solving and logical thinking</strong>, which has
          fueled my enthusiasm for the field of information systems.{" "}
        </p>
        <p>
          My coursework has provided me with a <strong>solid foundation</strong>{" "}
          in various programming languages, database management, and system
          analysis, enabling me to develop innovative solutions to complex
          challenges.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        <p>
          Here are some of my skills on which I have been working on for the
          past year.
        </p>
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>SQLite</li>
          <li>MySQL</li>
          <li>React JS</li>
          <li>React Native</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Work Experience</h2>
        <ul>
          <li>🔵 Software Engineer, Beijing YingKe Law Firm Tianjin Office</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>🔵 PMIHK Project Management Case Competition 2024</li>
          <li>
            🔵 Joint University Outstanding Marketing Award Session
            2022-2023--Semi-final
          </li>
          <img class="PMIHK" src={PMIHK} alt="PMIHK" />
        </ul>
      </section>

      <section className="about-section">
        <h2>Certification</h2>
        <div className="cert_container">
          <a href="https://www.credly.com/badges/23629085-fcca-454a-8abd-b09a3880a5ce/public_url">
            <img class="cert1" src={azure} alt="Azure" />
          </a>
          <li>Microsoft Certification: Azure Fundamentals AZ-900</li>
          <img class="cert" src={green} alt="Green" />
          <li>EY & Microsoft: Green Skills Passport Certification</li>
        </div>
      </section>

      <section className="about-section">
        <h2>My School Life🥰</h2>
        <ul>
          <li>
            🔵 Peer Mentor: Contributing to the school community and supporting
            my mentees in their transition to university life. By sharing my
            personal experiences and offering practical tips, I enable them to
            navigate challenges, manage their time effectively, and make the
            most of available resources.
          </li>
          <li>
            🔵 Volunteer with HKUST Connect: Actively engage in various
            community work initiatives, such as the Bread Run and Feeding Hong
            Kong Warehouse Session organized by Feeding Hong Kong{" "}
          </li>
          <li>
            🔵 Spark Global Events: Participating in different kind of
            activities such as cultural tours and social events with non-local
            students{" "}
          </li>
        </ul>

        <div className="imageSlider">
          {/* <button onClick={previousImage}>Previous</button> */}
          <img
            className="sliderImage"
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          {/* <button onClick={nextImage}>Next</button> */}
        </div>
      </section>
    </div>
  );
};

export default About;
