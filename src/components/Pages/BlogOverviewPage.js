import React from "react";
import PageWithHeader from './PageWithHeader';
import { Blog } from '..';

export default function Resume (props) {
  return (
    <PageWithHeader>
      <Blog blogPosts={props.blogPosts} />
    </PageWithHeader>
  );
}