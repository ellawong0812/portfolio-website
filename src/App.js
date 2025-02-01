import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Academic from "./Components/Academic";
import Footer from "./Components/Footer";
import MySchoolLife from "./Components/MySchoolLife";
import BookReview from "./Components/BookReview";
import { ArrowUp } from "@phosphor-icons/react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router basename="/portfolio-website">
      <div className="app-container">
        <Navbar />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/school" element={<MySchoolLife />} />
            <Route path="/book" element={<BookReview />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* Smooth Scroll-to-Top Button */}
        <button
          className={`scroll-to-top ${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <ArrowUp size={24} weight="bold" />
        </button>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
