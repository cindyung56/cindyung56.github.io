import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import gs1 from "./images/gs1.png";
import gs2 from "./images/gs2.jpg";
import gs3 from "./images/gs3.png";
import gs4 from "./images/gs4.jpg";

export default function GrowingStars() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Growing Stars Simulator</h1>
      </div>
      <div className="p-links">
        <a
          href="https://github.com/cindyung56/gs-simulator"
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
            <b>Languages & Frameworks Used:</b> JavaScript, React.js, CSS,
            MySQL, Sequelize.js
          </li>
          <li>
            <b>Group Members:</b> Solo project! (Still a work in progress)
          </li>
          <li>
            <b>Website Description:</b> An online web simulator of the game{" "}
            <i>the iDOLM@STER SideM: Growing Stars.</i>
            The website emulates the gacha functionality of the game, where
            users can pull for 1 or 10 cards of different rarities using
            currency called gems. Unlike the game itself, this website allows
            for the ability to pull infinite amount of cards each time without
            consequence. It is also a way to preserve the experience of the
            gacha mechanic as the game reaches end of service in July 2023.
          </li>
        </ul>

        <h2>ABOUT</h2>
        <p>
          The Growing Stars Simulator is a full-stack application that emulates
          a Japanese mobile app game. The user will be able to obtain cards from
          the random simulator that will randomly generate 1 to 10 cards of
          different rarities, based on specific probabilities. Some cards will
          be at a higher chance to obtain based on the banner chosen (which can
          be chosen on the left). The website will keep track of how many times
          the user has rolled on each individual banner, and the cumulative
          count of how many gems spent. Since this is a simulation, there is an
          infinite amount of gems so the user can continue for however long they
          want!
        </p>
        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={true}>
            <div>
              <img src={gs1} alt="initial page with banners"></img>
              <p className="legend">
                The main gacha page with all banners, gems spent, spark counter,
                and the two buttons to pull for cards.
              </p>
            </div>
            <div>
              <img src={gs2} alt="info page"></img>
              <p className="legend">
                Information tab which displays basic info about the website,
                probabilities, wish history, and update history.
              </p>
            </div>
            <div>
              <img src={gs3} alt="trello board"></img>
              <p className="legend">
                Trello board to keep track of all tasks along the development
                process (as of May 2023).
              </p>
            </div>
            <div>
              <img src={gs4} alt="trello board"></img>
              <p className="legend">
                Figma prototype of how to style and recreate the gacha page
                (referencing a picture from the game itself!)
              </p>
            </div>
          </Carousel>
        </div>

        <h2>RESPONSIBILITIES</h2>
        <p>
          As the sole developer working on this personal project, it is a giant
          undertaking learning how to emulate the same functionalities of the game
          using React.js. I broke up my tasks into several steps using a Trello
          kanban board:
          <ul>
            <li>
              Create a wireframe / prototype of how the pages should look.
            </li>
            <li>
              Download all necessary frameworks such as FontAwesome, React, etc.
            </li>
            <li>
              Determine how many initial components were needed for each page.
            </li>
            <li>
              Keep note of any future features to include after a minimum viable
              product was established and published.
            </li>
          </ul>
          The front-end uses React.js, JavaScript, and CSS. The back-end uses
          Sequelize.js with a custom API to connect the front-end to the MySQL
          database that stores all of the card and banner information.
        </p>

        <p>
          While I had worked with React.js before for other projects, I think
          being able to do this project by myself helped me immensely with
          understanding how React hooks worked. Unlike normal
          HTML/CSS/JavaScript websites, React.js uses states and effect hooks to
          keep track of changes on a website. I used these to my advantage when
          I tackled changing the selected banner and having to update the
          background images to fit with the banner chosen. Seeing the changes in
          real time whenever I saved my code helped me understand hooks a lot
          better than I initially did, which I then used to create the
          Information component as well.
        </p>

        <p>
          While still a work in progress and not my initial purpose, I intend to
          use this personal project as a way to preserve the fond memories of
          GROWING STARS for the future. The game unfortunately reached its end
          in July 2023 and cannot be downloaded anymore. I hope that once this
          simulator is finished, it will help other fans like me have fun and
          look back at the game for what it was.
        </p>
      </div>
    </div>
  );
}
