import React from "react";
import "../styling/Project_row.css";
import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function ProjectRow(props) {
  const { slug, title, shortDescription, mainImage } = props.project.fields;
  const htmlDesc = documentToReactComponents(shortDescription);

  return (
    <div className="project-card col s12 l3 m6">
      <Link to={slug}>
        <img className="project-image" src={mainImage.fields.file.url} alt={mainImage.fields.file.title} />
      </Link>
      <Link to={slug}>
        <h4>{title}</h4>
      </Link>
      {htmlDesc}
      <Link to={slug} className="cta">View project</Link>
    </div>
  );
}

export default ProjectRow;
