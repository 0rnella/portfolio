import React from "react";
import { ProjectRow } from "./";

function Projects(props) {
  return (
    <section className="row">
      <h2>Recent projects</h2>
      {props.projects.map(project => (
        <ProjectRow key={project.fields.title} project={project} />
      ))}
    </section>
  );
}

export default Projects;
