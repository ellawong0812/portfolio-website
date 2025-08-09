import React, { useState, useEffect } from "react";
import "./MySchoolLife.css";
import life1 from "../Assets/life1.JPG";
import life2 from "../Assets/life2.png";
import life3 from "../Assets/life3.jpg";
import life4 from "../Assets/life4.jpg";
import life5 from "../Assets/life5.jpg";
import life6 from "../Assets/life6.JPG";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const MySchoolLife = () => {
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

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="schoollife-container">
      <h1 style={{ color: "#1a73e8" }}>My University Journey 🎓</h1>
      <p>
        My university experience at <strong>HKUST</strong> has been an exciting
        blend of academics, mentorship, and community involvement. I have had
        the privilege of engaging in various activities that have enriched my
        personal and professional growth.
      </p>

      <section className="schoollife-section">
        <h3>Campus Involvement</h3>
        <ul className="schoollife-list">
          <li>
            <strong>🎯 Information Systems Student Ambassador</strong>
            <p>
              - Represented the <strong>Information Systems</strong> program,
              assisting prospective students in understanding course structure,
              career opportunities, and university life.
              <br /> - Actively participated in the{" "}
              <strong>Student-Staff Liaison Committee (SSLC)</strong>, providing
              feedback to improve the program.
            </p>
          </li>
          <li>
            <strong>👩‍💻 Student Helper for ISOM2020 (Python Course)</strong>
            <p>
              - Assisted students in coding exercises and troubleshooting during
              lectures and lab sessions.
            </p>
          </li>
          <li>
            <strong>🤝 Peer Mentor</strong>
            <p>
              - Guided first-year students in their transition to university
              life by sharing experiences, providing academic advice, and
              fostering a supportive community.
            </p>
          </li>
        </ul>
      </section>

      <section className="schoollife-section">
        <h3>Community Engagement</h3>
        <ul className="schoollife-list">
          <li>
            <strong>🌍 Volunteer with HKUST Connect</strong>
            <p>
              - Actively participated in initiatives like the
              <strong> Bread Run</strong> and <strong>Feeding Hong Kong</strong>
              Warehouse Sessions, contributing to food redistribution efforts
              for the underprivileged.
            </p>
          </li>
          <li>
            <strong>🌎 Spark Global Events</strong>
            <p>
              - Engaged in cultural tours and social events with international
              students, fostering cross-cultural exchange and global networking.
            </p>
          </li>
        </ul>
      </section>

      <section className="gallery-section">
        <h3>Memorable Moments 📸</h3>
        <div className="image-slider">
          <button className="slider-button" onClick={previousImage}>
            <ArrowLeft size={24} />
          </button>
          <img
            className="slider-image"
            src={images[currentImageIndex]}
            alt="University Life"
          />
          <button className="slider-button" onClick={nextImage}>
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MySchoolLife;
