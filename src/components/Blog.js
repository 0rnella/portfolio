import React from 'react';
import {BlogPreview} from './'

const Blog = (props) => {
    return (<section>
        {props.blogPosts.map(blogPost => <BlogPreview key={blogPost.fields.title} blogPost={blogPost}/>)}
    </section>)
}

export default Blog;