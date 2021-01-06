import React from "react";
import PageWithHeader from './PageWithHeader';
import { Projects } from '..';

export default function Resume (props) {
  return (
    <PageWithHeader>
      <Projects projects={props.projects}/>
    </PageWithHeader>
  );
}