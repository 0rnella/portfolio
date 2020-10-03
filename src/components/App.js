import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {AboutPage, Footer, Header, Home, Projects, ProjectPage, ResumePage} from "./";
import "../styling/App.css";
import { resumeUrl } from "../assets/index";
import { makeClient } from '../helpers';


const client = makeClient();

const App = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
      const fetchProjects = async (client) => {
        try {
          const entries = await client.getEntries({ content_type: 'project' })
          setProjects(entries.items);
        } catch(err) {
          setError(err);
        }
      }

      fetchProjects(client);
  }, [error]);

  console.log(projects);
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="content">
            <Switch>
              {projects.map((project, idx) => (
                <Route
                  key={project.fields.title}
                  exact
                  path={`/${project.fields.slug}`}
                  render={props => <ProjectPage idx={idx} project={project} projects={projects} />}
                />
              ))}
              <Route
                exact
                path="/portfolio"
                render={props => <Projects projects={projects} />}
              />
              <Route
                exact
                path="/resume"
                render={props => <ResumePage resumeUrl={resumeUrl} />}
              />
              <Route
                exact
                path="/about"
                render={props => <AboutPage />}
              />
              <Route render={props => <Home projects={projects} />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
