import React, { Fragment, useState, useEffect } from "react";
import ProjectRow from "./Project_row";
import { makeClient } from '../helpers';

const client = makeClient();

function Projects(props) {
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
    <Fragment>
      <div className="row">
        <h3>Recent projects</h3>
        {projects.map(project => (
          <ProjectRow key={project.fields.title} project={project} />
        ))}
      </div>
    </Fragment>
  );
}

export default Projects;
