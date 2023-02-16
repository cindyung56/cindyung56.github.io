import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// importing images
import teamPic from "./images/team.png";

export default function ResumeCreator() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Resume Creator</h1>
      </div>
      <div className="p-links">
        <a
          href="https://fierce-ravine-29010.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a
          href="https://github.com/cindyung56/resume-creator"
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
            <b>Languages/Libraries/Frameworks Used:</b> HTML, CSS, JavaScript,
            jQuery, Handlebars.js, express.js, MySQL, Sequelize
          </li>
          <li>
            <b>Group:</b> Anonymous Dinosaurs (4 members)
          </li>
          <li>
            <b>Website Description:</b> Create a simple and interactive resume
            application that everyone can use. Our application provides a simple
            form for you to fill out, and templates to style your resume from.
          </li>
        </ul>

        <p className="team-img">
          <img src={teamPic} alt="team pic" />
        </p>

        <h2> ABOUT </h2>
        <p>
          Resume Creator is a full-stack application that generates a resume on
          the browser. Upon logging in, the user fills out a form about their
          experience and contact information. This includes professional
          experiences and opportunities, education, and personal skills. The
          user can also choose a template to style their resume. Once the form
          is submitted, the application will generate a web based resume with
          all of the information they inputted in an easy to read format,
          without having to deal with the styling themselves!
        </p>

        <p>
          Anonymous Dinosaurs created this application for job seekers looking
          for resume design templates and the ability to preview their
          experiences and information in a premade format.
        </p>
        <div className="carousel-div">
          CAROUSEL GOES HERE
          {/* <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={foodAdv1} alt="food adventure home page" />
            </div>
            <div>
              <img src={foodAdv2} alt="food adventure questionnaire form" />
            </div>
          </Carousel> */}
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>DESC GOES HERE</p>

        <p>DESC GOES HERE</p>
      </div>
    </div>
  );
}
