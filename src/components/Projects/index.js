// importing libraries and components
import React from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

// importing images
import beachPic from "../../images/beach-from-unsplash.jpg";

import pikachuPic from "../../images/pikachu.jpg";
import foodAdventure from "../../images/food-adventure.jpg";
import resumeCreator from "../../images/resume-creator.jpg";
import typeIndexPic from "../../images/type-index.jpg";
import growingStarsPic from "../../images/growing-stars.jpg";
import wordleClonePic from "../../images/wordle-clone.jpg";

// importing css styling
import "./style.css";

export default function Projects() {
  return (
    <Parallax
      blur={4}
      bgImage={beachPic}
      bgImageAlt="beach from unsplash"
      className="parallax-section projects-parallax"
    >
      <section className="content" id="projects">
        <h2 className="content-text projects-title">Projects</h2>
        <div className="projects-div">

        <section className="project-card">
            <img src={wordleClonePic} alt="Wordle Clone"></img>
            <div className="project-description">
              <h2>Wordle Clone</h2>
              <a href="https://cindyung56.github.io/wordle-clone/">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/wordle-clone">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A JavaScript project recreating the popular New York Times game Wordle. Uses animate.css to help with the animations.
              </p>
              <Link to="/wordle-clone-proj" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

        <section className="project-card">
            <img src={growingStarsPic} alt="GROWING STARS Simulator"></img>
            <div className="project-description">
              <h2>GROWING STARS Sim</h2>
              
              <a href="https://github.com/cindyung56/gs-simulator">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A web simulation of the gacha feature of the mobile game THE iDOLM@STER SideM: GROWING STARS.
                Users can use infinite currency to pull for cards of different rarities and see their results in an inventory.
              </p>
              <Link to="/growing-stars" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

          <section className="project-card">
            <img src={pikachuPic} alt="I Choose You!"></img>
            <div className="project-description">
              <h2>I Choose You!</h2>
              <a href="https://github.com/a-riveragonzalez/i-choose-you">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A responsive MERN dating web application that allows users to
                create Pokémon-themed profiles, take a quiz to determine their
                Pokémon, and match with other users to battle (or chat).
              </p>
              <Link to="/i-choose-you" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

          <section className="project-card">
            <img src={typeIndexPic} alt="Pokemon Type Index"></img>
            <div className="project-description">
              <h2>Pokémon Type Index</h2>
              <a href="https://github.com/mladame/pokemon-type-index">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A Pokémon website that allows users to search for a Pokémon and
                view its sprite, shiny form, weaknesses, strengths, and
                immunities.
              </p>
              <Link to="/pokemon-type" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

          <section className="project-card">
            <img src={resumeCreator} alt="Resume Creator"></img>
            <div className="project-description">
              <h2>Resume Creator</h2>
              <a href="https://github.com/cindyung56/resume-creator">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                An MVC full stack web application that generates a resume from a
                form using a prebuilt resume template. No more having to create
                your own: just have the application do it for you!
              </p>
              <Link to="/resume-creator" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

          <section className="project-card">
            <img src={foodAdventure} alt="Food Adventure"></img>
            <div className="project-description">
              <h2>Food Adventure</h2>
              <a href="https://cindyung56.github.io/food-adventure/">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/food-adventure">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A front-end web application to choose a restaurant for when
                you're feeling indecisive and hungry.
              </p>
              <Link to="/food-adventure" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section>

          {/* <section className="project-card">
            <img src={weatherDashboard} alt="Weather Dashboard"></img>
            <div className="project-description">
              <h2>Weather Dashboard</h2>
              <a href="https://cindyung56.github.io/weather-dashboard/">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/weather-dashboard">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A front-end application of a weather dashboard that shows a
                city's weather forecast for the next 5 days using the
                OpenWeather API.
              </p>
              <Link to="/weather-dashboard" className="more-info-btn">
                MORE INFO
              </Link>
            </div>
          </section> */}

        </div>
      </section>
    </Parallax>
  );
}
