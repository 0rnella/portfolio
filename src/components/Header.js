import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Link to="/" id="name">Ornella Friggit</Link>
      <nav id="Navbar">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Résumé</Link>
      </nav>
    </header>
  );
}

export default Header;
