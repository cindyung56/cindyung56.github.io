import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import images
import chooseImg1 from "./images/icy1.png";
import chooseImg2 from "./images/icy2.png";
import chooseImg3 from "./images/icy3.png";

export default function IChooseYou() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">I Choose You!</h1>
      </div>
      <div className="p-links">
        <a
          href="https://ichooseyou.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a
          href="https://github.com/a-riveragonzalez/i-choose-you"
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
            <b>Languages/Libraries/Frameworks Used:</b> React.js, express.js,
            MongoDB, mongoose, Apollo Server, GraphQL,
            react-responsive-carousel, react-bootstrap
          </li>
          <li>
            <b>APIs Used:</b> <a href="https://pokeapi.co/about">PokéAPI</a>
          </li>
          <li>
            <b>Group Members:</b> 4
          </li>
          <li>
            <b>Website Description:</b> A responsive MERN dating web application
            that allows users to create Pokémon-themed profiles, take a quiz to
            determine their Pokémon, and match with other users to chat and
            deepen your relationships.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          I Choose You! is a dating / social media website made for Pokémon fans
          by Pokémon fans. While many Pokémon communities exist online nowadays,
          we came up with the idea that many Pokémon fans might want to connect
          with other people with the same interests and pursue a romantic
          relationship. And what better way to break the ice than to talk about
          your favorite series? I Choose You! allows users to sign up and be
          assigned a Pokémon who will accompany them on their adventures to find
          their very best partner. Matching with another person allows you to
          chat {"("}formerly named "battle" for fun{")"} with them just like a
          social media application.
        </p>

        <p>
          This is an ongoing project made by Team Rocket {"("}not from the anime
          series{")"}, a group of four Pokémon lovers who met at a coding
          bootcamp. Currently we have plans to change the application from a
          dating site to a social media app that will facilitate more
          communication between different communities of Pokémon. We encourage
          fans to find friends they can battle, trade, or raid with!
        </p>
        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={chooseImg1} alt="i choose you home" />
              <p className="legend">Home Page (when not signed in)</p>
            </div>
            <div>
              <img src={chooseImg3} alt="i choose you login" />
              <p className="legend">Login page</p>
            </div>
            <div>
              <img src={chooseImg2} alt="i choose you sign up" />
              <p className="legend">Sign Up page</p>
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>
          As one of the full-stack developers working on this website, I made my
          mark both on the back-end and front-end areas of the application. My
          biggest contribution was the Quiz page that new users take after
          signing up. 
        </p>

        <p>DESC GOES HERE</p>
      </div>
    </div>
  );
}
