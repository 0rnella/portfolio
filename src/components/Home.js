import React from "react";
import Projects from "./Projects.js";
import IntroHero from "./Intro_hero.js";

function Home(props) {
  return (
    <div>
      <IntroHero />
      <Projects {...props} />
    </div>
  );
}

export default Home;
