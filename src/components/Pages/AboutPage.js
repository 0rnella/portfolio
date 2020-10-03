import React from "react";
import images from '../../assets/images/index';

function About(props) {
  return (
    <section id="about">
      <div className="profile-image">
        <img src={images.aboutMe} alt="Ornella Friggit" style={{ width: "94%", padding: "3%" }} />
      </div>
      <div className="description">
        <h1>About me</h1>
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
        <ul>
          <li>
            <b>I love languages.</b><br/>
            I'm completely fluent in 3 languages: French, Spanish, and English. I
            also speak conversational German and Portuguese, and am currently
            learning Japanese and Dioula.
          </li>
          <li>
            <b>I have a dog named Pixel.</b><br/>
            ...and she's the best. She's an NYC ACC rescue, secretly a cat, and
            one of the funniest creatures the world has ever met. Ruff said.
          </li>
          <li>
            <b>I like to make art.</b><br/>
            I love painting portraits in acrylic and in ink, and I enjoy
            watercolors. I'm starting to get into oil. I also sing, but mostly in
            the shower.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
