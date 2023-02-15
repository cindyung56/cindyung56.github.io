import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ResumeCreator(){
    return(
        <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Resume Creator</h1>
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
            <b>Website Description:</b> A MERN web application made for Pokémon
            fans by Pokémon fans! Meet new people, chat with them, and maybe
            your relationship will turn into something much more.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>DESC GOES HERE</p>

        <p>DESC GOES HERE</p>
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
    )
}