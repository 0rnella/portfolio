import React, { Fragment } from "react";
import ProjectRow from "./Project_row";

function Projects(props) {
  return (
    <Fragment>
      <div className="row">
        <h3>Recent projects</h3>
        {props.projectsList.map(project => (
          <ProjectRow project={project} logo={props.images[project.logo]} key={project.title} />
        ))}
      </div>
    </Fragment>
  );
}

export default Projects;
