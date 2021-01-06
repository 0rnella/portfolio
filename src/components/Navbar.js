import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (<nav id="Navbar">
    <Link to="/about">About</Link>
    <Link to="/portfolio">Projects</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/resume">Résumé</Link>
  </nav>);
};

export default Navbar;
