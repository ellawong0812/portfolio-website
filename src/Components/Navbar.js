import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink to="/Intro" className="navbar__link" >Introduction</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/About" className="navbar__link" >About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/Academic" className="navbar__link" >Academic</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/Projects" className="navbar__link">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;