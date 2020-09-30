import React, { Fragment } from "react";

function About(props) {
  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m4 l4">
          <img src={props.images.aboutMe} alt="Ornella Friggit" style={{ width: "94%", padding: "3%" }} />
        </div>
        <div className="col s12 m8 l8 left-align">
          <h3>About me</h3>
          <p>
            I am a full-stack software engineer with experience as a graphic and
            web designer. I've always loved data.
        </p>
          <p>
            I’m really passionate about disseminating information and resources,
            and empowering individuals and small businesses. If a project utilizes
            data to create impact, I'm in!
        </p>
          <h4>Some fun facts:</h4>
          <h5>
            <i className="material-icons">toys</i>I love languages.
        </h5>
          <p>
            I'm completely fluent in 3 languages: French, Spanish, and English. I
            also speak conversational German and Portuguese, and am currently
            learning Japanese and Dioula.
        </p>
          <h5>
            <i className="material-icons">toys</i>I have a dog named Pixel
        </h5>
          <p>
            ...and she's the best. She's an NYC ACC rescue, secretly a cat, and
            one of the funniest creatures the world has ever met. Ruff said.
        </p>
          <h5>
            <i className="material-icons">toys</i>I like to make art.
        </h5>
          <p>
            I love painting portraits in acrylic and in ink, and I enjoy
            watercolors. I'm starting to get into oil. I also sing, but mostly in
            the shower.
        </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
