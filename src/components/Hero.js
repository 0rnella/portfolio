import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from '.';

function Hero() {
  return (
    <div id="hero">
      <Navbar/>
      <div class="intro">
        <p>Hi! I'm Ornella Friggit, and I work as a full-stack developer.</p>
        <p>
          Please feel free to view
          <Link to="/portfolio" className="cta">some of my recent personal projects</Link>
          and read
          <Link to="/portfolio" className="cta">some of my news and thoughts.</Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
