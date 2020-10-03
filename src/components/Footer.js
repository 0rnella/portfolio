import React from "react";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Github:{" "}
        <a
          href="http://github.com/0rnella"
          target="_blank"
          rel="noopener noreferrer"
        >
          @0rnella
        </a>
        {"    "}|{"    "}Linkedin:{" "}
        <a
          href="http://linkedin.com/in/friggito"
          target="_blank"
          rel="noopener noreferrer"
        >
          /friggito
        </a>
        {"    "}|{"    "}Twitter:{" "}
        <a
          href="http://twitter.com/zerornella"
          target="_blank"
          rel="noopener noreferrer"
        >
          @zerornella
        </a>
      </p>
      <p>
        <a href="mailto:ornella.friggit@gmail.com">ornella.friggit@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
