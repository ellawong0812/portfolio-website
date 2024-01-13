import "./App.css";
import Intro from "./Components/Intro";
import React from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Academic from "./Components/Academic";

function App() {
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
      </div>
    </Router>
  );
}

export default App;
