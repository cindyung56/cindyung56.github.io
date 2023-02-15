import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./style.css";
import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import images
import foodAdv1 from "./images/fa1.png";
import foodAdv2 from "./images/fa2.png";

export default function FoodAdventure() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">FOOD ADVENTURE</h1>
      </div>
      <div className="p-links">
        <a
          href="https://cindyung56.github.io/food-adventure/"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a
          href="https://github.com/cindyung56/food-adventure"
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
            <b>Languages Used:</b> HTML, CSS, JavaScript
          </li>
          <li>
            <b>APIs Used:</b> Zip Code, Yelp, Google Maps
          </li>
          <li>
            <b>Group Members:</b> 4
          </li>
          <li>
            <b>Website Description:</b> An app for when you're feeling hungry
            and indecisive.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          Ever felt like getting takeout, but not sure where to go? Going out
          with friends but nobody can decide on a place? Just want someone or
          something to commit for you?
        </p>

        <p>
          Food Adventure is a web browser application that chooses a restaurant
          for you! Enter your zip code in the input box and send it to the app.
          The app will save your information for next time. Then decide if you
          want to let the app generate results immediately, or if you have
          preferences that will influence your choice. If you want to enter your
          preferences, the app will redirect you to a form with three questions
          about dietary preferences and budget. The site will then generate
          three random restaurants in the area along with overall rating.
          Choosing a restaurant will bring the user to a new page with
          information taken from Yelp about the establishment. This includes
          ratings from other Yelp users, overall rating, and location. The
          results page also includes directions from the user's current location
          to the restaurant.
        </p>
        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={foodAdv1} alt="food adventure home page" />
            </div>
            <div>
              <img src={foodAdv2} alt="food adventure questionnaire form" />
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>
          I worked as a front-end developer on this website, primarily working
          on the questionnaire for dietary and budget preferences. As a group we
          thought of this feature for users who may be vegan or vegetarian, or
          may have specific allergies or dietary restrictions that prevent them
          from enjoying certain types of cuisines. Furthermore, we also thought
          budget and pricing would influence users' choices. On the website, the
          form is initially hidden from view when the page is first loaded. It
          is displayed when the "Choose preferences" button is clicked, hiding
          the zip code input container instead. This creates a seamless, smooth
          transition between each section without having to make new pages.
        </p>

        <p>
          When the website generates three random places, the user can choose
          one and the website will change to another page. This page will
          display information about the restaurant for the user to review. I
          worked together with a fellow team member to create this page. My goal
          was to implement and display the fetched data from the Yelp API to
          populate the results page with information about the chosen
          restaurant. 
        </p>
      </div>
    </div>
  );
}
