import "./App.css";
import Intro from "./Components/Intro";
import React, { useState, useEffect } from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Academic from "./Components/Academic";
import Footer from "./Components/Footer";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router basename="/portfolio-website">
      <div className="App">
        <Navbar />
        <div className="AppBody">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <button
          className={`move-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          Move to Top
        </button>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
