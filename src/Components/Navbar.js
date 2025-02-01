import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <NavLink to="/" className="navbar__brand">
            Home
          </NavLink>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink
              to="/about"
              className="navbar__link"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/school"
              className="navbar__link"
              activeClassName="active"
            >
              Campus Life
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/book"
              className="navbar__link"
              activeClassName="active"
            >
              Book Insights
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/academic"
              className="navbar__link"
              activeClassName="active"
            >
              Academic Journey
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/projects"
              className="navbar__link"
              activeClassName="active"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
