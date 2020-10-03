import React from 'react';
import { BlogPreview } from './';

const Blog = (props) => {
  return (<section>
    {props.blogposts? props.blogPosts.map(blogPost => <BlogPreview key={blogPost.fields.title} blogPost={blogPost}/>) : <p>I don't have any blog posts yet, but I'm working on it! In the meantime, you can follow me on <a href='twitter.com/zerornella'>Twitter</a>.</p>}
  </section>);
};

export default Blog;