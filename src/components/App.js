import React, { useState, useEffect } from "react";
import "../styling/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { resumeUrl } from "../assets/index";
import { makeClient } from '../helpers';

// Components
import About from "./About.js";
import Footer from "./Footer";
import Header from "./Header.js";
import Home from "./Home.js";
import Projects from "./Projects";
import SingleProject from "./Single_project";
import Resume from "./Resume";

const client = makeClient();

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { projectsList, images, resumeUrl };
  // }
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
                  render={props => <SingleProject idx={idx} project={project} projects={projects} />}
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
                render={props => <Resume resumeUrl={resumeUrl} />}
              />
              <Route
                exact
                path="/about"
                render={props => <About />}
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
