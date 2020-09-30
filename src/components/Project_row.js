import React from "react";
import "../styling/Project_row.css";
import { Link } from "react-router-dom";

function ProjectRow(props) {
  const { logo, project } = props;
  return (
    <div className="project-card col s12 l3 m6">
      <Link to={project.link}>
        <img className="project-image" src={logo} alt={project.logo} />
      </Link>
      <Link to={project.link}>
        <h4>{project.title}</h4>
      </Link>
      <p>{project.shortDesc}</p>
      <Link to={project.link} className="cta">View project</Link>
    </div>
  );
}

export default ProjectRow;
