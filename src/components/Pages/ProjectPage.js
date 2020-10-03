import React from "react";
import { wrench } from "../../assets/images";
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
          <p class='technology' key={tech}>
            <img class='wrench-icon' alt="wrench icon" src="/wrench.svg" />
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
          {prev && (
            <Link className='nav-arrow' to={`/${prev.fields.slug}`}>
              Previous
            </Link>
          )}
        </div>
        <div className="nav-arrow">
          {next && (
            <Link className='nav-arrow' to={`/${next.fields.slug}`}>
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
