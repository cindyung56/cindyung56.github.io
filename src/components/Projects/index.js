import React from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import beachPic from "../../images/beach-from-unsplash.jpg";
import pikachuPic from "../../images/pikachu.jpg";
import foodAdventure from "../../images/food-adventure.jpg";
import resumeCreator from "../../images/resume-creator.jpg";
import weatherDashboard from "../../images/weather-dashboard.jpg";
import techBlog from "../../images/tech-blog.jpg";
import reduxStore from "../../images/redux-store.jpg";
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
          <section className="project-card odd-project">
            <img src={pikachuPic} alt="I Choose You!"></img>
            <div className="project-description">
              <h2>I Choose You!</h2>
              <a href="https://ichooseyou.herokuapp.com/">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/a-riveragonzalez/i-choose-you">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A responsive MERN dating web application that allows users to
                create Pokemon-themed profiles, take a quiz to determine their
                Pokemon, and match with other users to battle (or chat).
              </p>
            </div>
          </section>

          <section className="project-card even-project">
            <img src={resumeCreator} alt="Food Adventure"></img>
            <div className="project-description">
              <h2>Resume Creator</h2>
              <a href="https://fierce-ravine-29010.herokuapp.com/">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/resume-creator">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                An MVC full stack web application that generates a resume from a
                form using a prebuilt resume template. No more having to create
                your own: just have the application do it for you!
              </p>
            </div>
          </section>

          <section className="project-card odd-project">
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
                you're feeling indecisive and hungry. Allows users to insert
                their zip code and submit it to get quick and easy
                recommendations for restaurants around the area.
              </p>
            </div>
          </section>

          <section className="project-card even-project">
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
                city's current weather conditions and forecast for the next 5
                days using the OpenWeather API.
              </p>
            </div>
          </section>

          <section className="project-card odd-project">
            <img src={techBlog} alt="Tech Blog"></img>
            <div className="project-description">
              <h2>The Tech Blog</h2>
              <a href="https://salty-earth-22984.herokuapp.com">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/tech-blog">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                An MVC tech blog application that allows users to post their
                coding thoughts or questions, and comment on other people's
                posts.
              </p>
            </div>
          </section>

          <section className="project-card even-project">
            <img src={reduxStore} alt="Redux Store"></img>
            <div className="project-description">
              <h2>Shop-Shop</h2>
              <a href="https://protected-chamber-30832.herokuapp.com">
                <FontAwesomeIcon className="project-icon" icon={faLink} />
              </a>
              <a href="https://github.com/cindyung56/redux-store">
                <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <p>
                A MERN ecommerce web application using React.js and Redux to
                keep track of orders, cart items, and products using a global
                store state.
              </p>
            </div>
          </section>
        </div>
      </section>
    </Parallax>
  );
}
