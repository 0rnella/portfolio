import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { resumeUrl } from "../../assets/index";
import { BlogOverviewPage, ProjectOverviewPage, ResumePage, AboutPage, Home } from '../';

const StaticRoutes = (props) => {
  const { blogPosts, projects } = props;
  return (
    <Fragment>
      <Route
        exact
        path="/blog"
        render={() => <BlogOverviewPage blogPosts={blogPosts} />}
      />
      <Route
        exact
        path="/portfolio"
        render={() => <ProjectOverviewPage projects={projects} />}
      />
      <Route
        exact
        path="/resume"
        render={() => <ResumePage resumeUrl={resumeUrl} />}
      />
      <Route
        exact
        path="/about"
        component={AboutPage}
      />
      <Route exact path='/' render={() => <Home projects={projects} />} />
    </Fragment>
  );
};

export default StaticRoutes;