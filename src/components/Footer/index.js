import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

export default function Home() {
  return (
    <footer>
      <a href="https://github.com/cindyung56" >
        <FontAwesomeIcon className="footer-icon" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/cindyung56/">
        <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
      </a>
    </footer>
  );
}
