import React from "react";
import "../styling/Single_project.css";
import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function SingleProject(props) {
  const project = props.project;
  const { title, description, githubUrl, mainImage, demo, technologies } = props.project.fields;
  const htmlDesc = documentToReactComponents(description);

  const logo = mainImage && mainImage.fields.file.url;
  const prev = props.projects[props.idx - 1];
  const next = props.projects[props.idx + 1];
  return (
    <div className="row single-proj-container">
      <div className="single-proj-data">
        <img className="single-proj-img" src={logo} alt={project.logo} />
        <h3>{title}</h3>
        
        <h4>Technologies used:</h4>
        {technologies.map(tech => (
          <p key={tech}>
            <i className="material-icons">build</i>
            {tech}
          </p>
        ))}
        {demo && <a href={demo} className="cta" target="_blank" rel="noopener noreferrer">
          Visit {title} Website
        </a>}
        {githubUrl && (
          <a href={githubUrl} className="cta" target="_blank" rel="noopener noreferrer">
            View {title} Code on Github
          </a>
        )}
        {htmlDesc}
      </div>
      <div className="arrow-container">
        <div className="nav-arrow">
          {prev ? (
            <Link to={`/${prev.fields.slug}`}>
              <i className="material-icons large">navigate_before</i>
            </Link>
          ) : (
            <i className="material-icons large transparent">navigate_before</i>
          )}
        </div>
        <div className="nav-arrow">
          {next ? (
            <Link to={`/${next.fields.slug}`}>
              <i className="material-icons large">navigate_next</i>
            </Link>
          ) : (
            <i className="material-icons large transparent">navigate_next</i>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
