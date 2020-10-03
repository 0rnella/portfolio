import React from 'react';
import { BlogPreview } from './';

const Blog = (props) => {
  return (<section>
    <h2>Blog Posts</h2>
    <div class='blog-posts-list'>
      {props.blogPosts.length? props.blogPosts.map(blogPost => <BlogPreview key={blogPost.fields.title} blogPost={blogPost}/>) : <p>I don't have any blog posts yet, but I'm working on it! In the meantime, you can follow me on <a href='twitter.com/zerornella'>Twitter</a>.</p>}
    </div>
  </section>);
};

export default Blog;