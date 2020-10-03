import React from 'react';
import day from 'dayjs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost = (props) => {
    const { title, publishDate, body, heroImage, tags } = props.blogPost.fields;
    const content = documentToReactComponents(body);
    const date = day(publishDate).format('DD MMMM YYYY');
    return (<article>
        <img className="blog-hero-image" src={heroImage.fields.file.url} alt={heroImage.fields.file.title} />
        <h1>{title}</h1>
        <time>{date}</time>
        {content}
    </article>);
}

export default BlogPost;