import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from './';

function Header() {
  return (
    <header className="App-header">
      <Link to="/" id="name">Ornella Friggit</Link>
      <Navbar/>
    </header>
  );
}

export default Header;
