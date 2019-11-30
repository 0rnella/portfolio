import React, { Fragment } from "react";
import ProjectRow from "./Project_row";
import { HeaderPadding } from "./Header";

function Projects(props) {
  return (
    <Fragment>
      <HeaderPadding />
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
