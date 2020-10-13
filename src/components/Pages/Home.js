import React, { Suspense } from "react";
import { IntroHero } from '../';
const Projects = React.lazy(() => import('../Projects'));

function Home(props) {
  return (
    <div>
      <IntroHero />
      <Suspense fallback="<section>Recent projects...</section>">
        <Projects {...props} />
      </Suspense>
    </div>
  );
}

export default Home;
