import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GrowingStars() {
  return (
    <div className="project-body">
      <div className="head-section"></div>
      <div className="p-links">
        {/* <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a> */}
        <a
          href="https://github.com/cindyung56/gs-simulator"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faGithub} />
          {"  "}GitHub
        </a>
      </div>
      <div className="p-description">
        <ul>
          <li>
            <b>Languages Used:</b> JavaScript, React.js, CSS, MySQL, Sequelize.js
          </li>
          <li>
            <b>Website Description:</b>
          </li>
        </ul>

        <h2>ABOUT</h2>
        <p>description goes here</p>
      </div>
    </div>
  );
}
