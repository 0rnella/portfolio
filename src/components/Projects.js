import React, { Fragment } from "react";
import {ProjectRow} from "./";

function Projects(props) {
  return (
    <Fragment>
      <div className="row">
        <h3>Recent projects</h3>
        {props.projects.map(project => (
          <ProjectRow key={project.fields.title} project={project} />
        ))}
      </div>
    </Fragment>
  );
}

export default Projects;
