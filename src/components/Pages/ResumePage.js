import React from "react";
import PageWithHeader from './PageWithHeader';

export default function Resume (props) {
  return (
    <PageWithHeader>
      <div className="intro">
        <a href={props.resumeUrl}><button>Download my résumé</button></a>
      </div>
    </PageWithHeader>
  );
}