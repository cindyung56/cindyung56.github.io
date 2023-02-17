import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//import images

export default function TechBlog() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Tech Blog</h1>
      </div>
      <div className="p-links">
        <a href="" target="_blank" rel="noreferrer" className="p-link-btn">
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a href="" target="_blank" rel="noreferrer" className="p-link-btn">
          <FontAwesomeIcon icon={faGithub} />
          {"  "}GitHub
        </a>
      </div>

      <div className="p-description">
        <ul>
          <li>
            <b>Languages/Libraries/Frameworks Used:</b> HTML, CSS, JavaScript,
            Bootstrap, express.js, MySQL, Sequelize, Handlebars.js
          </li>
          <li>
            <b>Group Members:</b> 1 (me, myself, and I)
          </li>
          <li>
            <b>Website Description:</b> A website where fellow software
            engineers and web developers can post their thoughts and rant about
            their jobs with each other.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          Tech Blog is a website where fellow users in tech can post their
          thoughts for others to see and engage in thought provoking discussion.
          The site requires one to log in to interact with posts and comment on
          others' thoughts. Whether it's to garner other opinions about
          languages and frameworks, engage in networking conversations, or just
          to post random thoughts about technology, anything goes on this blog!
        </p>

        {/* <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={foodAdv1} alt="food adventure home page" />
            </div>
            <div>
              <img src={foodAdv2} alt="food adventure questionnaire form" />
            </div>
          </Carousel>
        </div> */}
        <h2>RESPONSIBILITIES</h2>
        <p>
          As the sole creator of this blog, there were a lot of things to
          consider when making this application. The most challenging was being
          able to make the individual posts and the comments only accessible to
          signed in users, and connecting these models in the backend. I was
          able to do this by defining the relationship between the specific
          models through Sequelize. While users could have multiple Posts and
          Comments, these Comments only belonged to one Post, and could not
          happen the other way around. Keeping this relationship in mind, I made
          a Handlebars.js file that displayed all comments in each individual
          post using a template and the{" "}
          <span className="code-snippet">.map()</span> function, which took the
          array of comments and made div containers for each and every one.
        </p>

        <p>DESC GOES HERE</p>
      </div>
    </div>
  );
}
