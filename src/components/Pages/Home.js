import React, { Suspense, Fragment } from "react";
import { IntroHero } from '../';
const Projects = React.lazy(() => import('../Projects'));

function Home(props) {
  return (
    <Fragment>
      <IntroHero />
      <Suspense fallback="<section>Recent projects...</section>">
        <Projects {...props} />
      </Suspense>
    </Fragment>
  );
}

export default Home;
