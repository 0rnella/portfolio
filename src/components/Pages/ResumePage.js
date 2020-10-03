import React from "react"

export default function Resume (props) {
    return (<div id="Intro-row">
        <a href={props.resumeUrl}><button>Download my résumé</button></a>
    </div>)
}