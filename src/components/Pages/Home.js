import React from "react";
import {Projects, IntroHero} from '../';

function Home(props) {
  return (
    <div>
      <IntroHero />
      <Projects {...props} />
    </div>
  );
}

export default Home;
