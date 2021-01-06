import React, { Suspense, Fragment } from "react";
import { Hero } from '../';
const Projects = React.lazy(() => import('../Projects'));

function Home(props) {
  return (
    <Fragment>
      <Hero />
      <Suspense fallback="<section>Recent projects...</section>">
        <Projects {...props} />
      </Suspense>
    </Fragment>
  );
}

export default Home;
