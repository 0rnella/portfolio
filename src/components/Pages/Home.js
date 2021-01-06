import React, { Suspense, Fragment } from "react";
import { Hero } from '../';
const Projects = React.lazy(() => import('../Projects'));
const Blog = React.lazy(() => import('../Blog'));

function Home(props) {
  return (
    <Fragment>
      <Hero />
      <Suspense fallback="<section>Recent projects...</section>">
        <Projects {...props} />
      </Suspense>
      <Suspense fallback="<section>Recent blog posts...</section>">
        <Blog {...props} />
      </Suspense>
    </Fragment>
  );
}

export default Home;
