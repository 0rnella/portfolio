import React from "react";
import day from 'dayjs';
import { Link } from "react-router-dom";

function BlogPreview(props) {
  const { slug, title, description, heroImage, publishDate } = props.blogPost.fields;
  const date = day(publishDate).format('DD MMMM YYYY');

  return (
    <div className="blog-card">
      <Link className="blog-image" to={slug}>
        <img src={heroImage.fields.file.url} alt={heroImage.fields.file.title} />
      </Link>
      <div className="description">
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        <time>{date}</time>
        <p>{description}</p>
        <Link to={slug} className="cta">Read blog</Link>
      </div>
    </div>
  );
}

export default BlogPreview;
