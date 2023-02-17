import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//import images
import techBlog1 from "./images/tb1.jpg";
import techBlog2 from "./images/tb2.jpg";
import techBlog3 from "./images/tb3.jpg";
import techBlog4 from "./images/tb4.jpg";
import techBlog5 from "./images/tb5.jpg";

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
        <a href="https://salty-earth-22984.herokuapp.com/" target="_blank" rel="noreferrer" className="p-link-btn">
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a href="https://github.com/cindyung56/tech-blog" target="_blank" rel="noreferrer" className="p-link-btn">
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

        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={techBlog1} alt="tech blog home page" />
              <p className="legend">Home page with all recent posts</p>
            </div>
            <div>
              <img src={techBlog2} alt="tech blog login" />
              <p className="legend">
                Login page, with an option to switch to sign up
              </p>
            </div>
            <div>
              <img src={techBlog3} alt="tech blog dashboard" />
              <p className="legend">
                User dashboard upon logging in, shows all user's posts
              </p>
            </div>
            <div>
              <img src={techBlog4} alt="tech blog edit post" />
              <p className="legend">Edit an exisiting post, or delete it</p>
            </div>
            <div>
              <img src={techBlog5} alt="tech blog comment" />
              <p className="legend">Users can comment on someone else's post</p>
            </div>
          </Carousel>
        </div>
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
          array and made div containers for each and every Comment under a Post.
          All posts were able to be edited, so PUT and DELETE requests were
          necessary to make sure the database was appropriately updated with the
          correct information. The backend was entirely made from scratch and
          very fun to work on; working on this project allowed me to really hone
          down on how the relationships between each model functioned and what
          was the best course of action to make all functions work.
        </p>

        <p>
          One aspect that I sometimes take for granted is the ability to do
          event delegation in JavaScript. I specifically had problems that did
          not allow me to choose on a specific post while on the home page or
          user dashboard, despite the other functions and the API working
          properly. It was only after some more testing that I realized I needed
          to use event delegation to determine the specific target I wanted to
          edit. It was a great learning experience and it helped me fully
          understand why event delegation is so important.
        </p>
      </div>
    </div>
  );
}
