import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              Introduction
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about" className="navbar__link">
              About Me
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/academic" className="navbar__link">
              Academic
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/projects" className="navbar__link">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
