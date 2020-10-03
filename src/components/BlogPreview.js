import React from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function BlogPreview(props) {
  const { slug, title, description, heroImage } = props.blogPost.fields;

  return (
    <div className="blog-card col s12 l3 m6">
      <Link to={slug}>
        <img className="blog-image" src={heroImage.fields.file.url} alt={heroImage.fields.file.title} />
      </Link>
      <Link to={slug}>
        <h4>{title}</h4>
      </Link>
      <p>{description}</p>
      <Link to={slug} className="cta">Read blog</Link>
    </div>
  );
}

export default BlogPreview;
