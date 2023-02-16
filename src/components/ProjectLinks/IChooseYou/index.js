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
import chooseImg4 from "./images/icy4.png";
import chooseImg5 from "./images/icy5.png";
import chooseImg6 from "./images/icy6.png";
import chooseImg7 from "./images/icy7.png";
import chooseImg8 from "./images/icy8.png";

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
            <b>APIs Used:</b>{" "}
            <a href="https://pokeapi.co/about" className="external-link">
              PokéAPI
            </a>
          </li>
          <li>
            <b>Group:</b> Team Rocket (
            <a
              href="https://github.com/a-riveragonzalez"
              className="external-link"
            >
              Arely Rivera-Gonzalez
            </a>
            ,{" "}
            <a href="https://github.com/ffjt07" className="external-link">
              Jeremiah Torbit
            </a>
            ,{" "}
            <a
              href="https://github.com/Spider-Man616"
              className="external-link"
            >
              Andre Martinez
            </a>
            )
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
            <div>
              <img src={chooseImg4} alt="i choose you sign up" />
              <p className="legend">Quiz questions</p>
            </div>
            <div>
              <img src={chooseImg5} alt="i choose you sign up" />
              <p className="legend">Quiz result page</p>
            </div>
            <div>
              <img src={chooseImg6} alt="i choose you sign up" />
              <p className="legend">Home page (when signed in)</p>
            </div>
            <div>
              <img src={chooseImg7} alt="i choose you sign up" />
              <p className="legend">Matches page</p>
            </div>
            <div>
              <img src={chooseImg8} alt="i choose you sign up" />
              <p className="legend">"Battling" with another user</p>
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <h3>Quiz Page</h3>
        <p>
          As one of the full-stack developers working on this website, I made my
          mark both on the back-end and front-end areas of the application. My
          biggest contribution was the Quiz page that new users see immediately
          after signing up. One of the main concepts of our page was the feature
          to assign a Pokemon to each user based on their personality type; this
          is similar to the personality quiz that is prominently featured in the
          Pokemon Mystery Dungeon series. I was in charge of creating the Quiz
          page and displaying all of the questions on the site in a fun manner.
        </p>

        <p>
          To do this, I first created questions and responses with my team
          members, making sure to get their opinions on the content before
          putting them in a JSON file to save in our database for us to fetch
          each time the page is visited. Next, I used the{" "}
          <span className="code-snippet">.map{"()"}</span> function to display
          each question and their responses. This method was used to avoid
          repeating code and have the browser load the questions and responses
          in a template format. Each option gets highlighted in grey when the
          mouse is hovered over the selection, showing the user which choice
          they are about to choose. The most exciting feature of this section is
          the typewriter effect we applied on each of the questions as they were
          loaded in, one by one. The animation with the hover effects emulates
          the same exact feeling of playing a Pokemon game! We had struggles
          implementing the animation at first, but after extensive research and
          some advice from more experienced coders, we managed to solve our
          problem using the{" "}
          <span className="code-snippet">useEffect{"()"}</span> hook that would
          load the animation when each question is displayed.
        </p>

        <p>
          Another feature of the Quiz page is how the code determines your
          Pokemon type for you, which was all up to me to implement. We kept our
          scope small for our minimum viable product, deciding to use the main
          elemental triangle of Fire, Water, and Grass. Hence, all questions
          also had three options each - and they were attributed to one of the
          three types. These were also stored in the MongoDB database. Once a
          user chose a question, I made the application keep track of what type
          that answer was using three React states for each type. When the user
          completed the quiz, a function is called to calculate how many points
          they received overall in each type. Whichever type had the highest
          number of points would be considered the final Pokemon type for the
          user! If there is a tie, the program will randomly choose between the
          top two types. I created all of the functions to calculate everything
          and also assign the Pokemon type to the user's information, which is
          then stored in the database!
        </p>
      </div>
    </div>
  );
}
