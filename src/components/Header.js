import React from "react";
import "../styling/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Link to="/"><h4 id="text-logo">Ornella Friggit</h4></Link>
      <nav id="Navbar">
        <Link to="/portfolio">My work</Link>
        <Link to="/about">About me</Link>
        <Link to="/resume">Résumé</Link>
      </nav>
    </header>
  );
}

export default Header;
