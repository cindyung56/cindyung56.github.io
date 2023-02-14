import React from "react";
import "./style.css";
import "../project-style.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

        <h2>INSERT CAROUSEL HERE</h2>

        <p>I worked as a front-end developer on this website, </p>
      </div>
    </div>
  );
}
