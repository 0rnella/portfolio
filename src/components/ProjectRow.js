import React from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function ProjectRow(props) {
  const { slug, title, shortDescription, mainImage } = props.project.fields;
  const htmlDesc = documentToReactComponents(shortDescription);

  return (
    <div className="project-card">
      <Link className="project-image" to={slug}>
        <img src={mainImage.fields.file.url} alt={`${title} logo`} />
      </Link>
      <div className='description'>
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        {htmlDesc}
        <Link to={slug} className="cta">View project</Link>
      </div>
    </div>
  );
}

export default ProjectRow;
