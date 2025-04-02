import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import pictures
import typeIndex1 from "./images/typeindex1.jpg";
import typeIndex2 from "./images/typeindex2.jpg";
import typeIndex3 from "./images/typeindex3.jpg";
import typeIndex4 from "./images/typeindex4.jpg";

export default function TypeIndex() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Pokémon Type Index</h1>
      </div>
      <div className="p-links">
        <a
          href="https://github.com/mladame/pokemon-type-index"
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
            <b>Languages/Libraries/Frameworks Used:</b> React.js, CSS, Bootstrap
          </li>
          <li>
            <b>APIs used:</b>{" "}
            <a href="https://pokeapi.co/" className="external-link">
              PokéApi
            </a>
          </li>
          <li>
            <b>Group:</b>{" "}
            <a
              href="https://github.com/a-riveragonzalez"
              className="external-link"
            >
              Arely Rivera-Gonzalez
            </a>
            ,{" "}
            <a href="https://github.com/Proper-Stevo" className="external-link">
              Steven Barrios
            </a>
            ,{" "}
            <a href="https://github.com/mladame" className="external-link">
              Martha Adame
            </a>
          </li>
          <li>
            <b>Website Description:</b> A Pokémon website that allows users to
            search for a Pokémon and view its sprite, shiny form, weaknesses,
            strengths, and immunities.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          If you played Pokémon before, you might know how hard it is to
          remember every single Pokémon and their types. There are currently
          more than 1000 Pokémon and 18 Pokémon types -- and this isn't even
          including multiple combinations of types there are! What can be
          frustrating sometimes is trying to remember what Pokémon are weak to
          what types, and it gets even more complicated when two different types
          can cancel out each other's strengths and weaknesses. This website is
          meant for fans who want to check this information without having to
          find and decipher a type chart every single time they play Pokémon.
          For shiny hunting purposes, there's also a toggle to see the Pokémon's
          shiny sprite!
        </p>

        <p>
          This app was made by Pokémon fans who were just as tired of searching
          up Pokémon every time they didn't know what was super effective.
        </p>
        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={typeIndex1} alt="type index home page" />
              <p className="legend">
                Initial page on load (Pikachu typed in search box)
              </p>
            </div>
            <div>
              <img src={typeIndex2} alt="type index search" />
              <p className="legend">
                Pikachu's information of what types it is weak to and strong
                against
              </p>
            </div>
            <div>
              <img src={typeIndex3} alt="type index two types search" />
              <p className="legend">
                A Pokémon with two types like Torterra is immune to Electric,
                but weaker against Ice
              </p>
            </div>
            <div>
              <img src={typeIndex4} alt="type index shiny toggle" />
              <p className="legend">
                Press the switch to toggle between the Pokémon's original form
                and shiny form! (Shiny Eevee is silver, original is brown)
              </p>
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>
          Approaching this website was more difficult than expected. While we
          were able to easily fetch the data from the PokeAPI, how to implement
          this was much harder than just displaying what we got. The data from
          the API call did provide the Pokémon's statistics such as name, types,
          sprites, etc. but the main problem was about Pokémon that had{" "}
          <i>two</i> types. Unlike the beloved Pikachu or Eevee who are only of
          one type, there were a lot of Pokémon that have two. For example,
          Torterra is a Grass/Ground Pokémon - meaning it could gain or lose
          weaknesses due to its dual typing. However, the API did not provide
          those calculations for us; when we searched for Torterra, we received{" "}
          <i>two separate arrays</i> of Grass weaknesses and Ground weaknesses.
          This meant it was up to us to calculate the type advantages and
          disadvantages ourselves.
        </p>

        <p>
          I took the lead to approach this problem by creating the Offensive
          Card, which shows what types the searched Pokemon is recommended
          against. We used a combination of arrays to store the data into their
          respective categories (2x, 1/2x, and 0x). Once that was completed, I
          then created a function that checked for duplicates in each of the
          arrays. For example, Torterra is a Grass/Ground type - and both Grass
          and Ground were super effective against Rock. Rock would appear in the
          array twice, so I created code to strip the array of the duplicate
          elements. This also ended up being the main basis of how we would
          approach the Defensive Card, which is more complicated with multiple
          type disadvantages and the possibility of weaknesses and strengths
          canceling each other out.
        </p>

        <p>
          I also contributed to the CSS design of the website, mostly focusing
          on the types that appear in each of the cards. In the actual Pokemon
          games, each type is represented by a color and makes it easier for
          some users to tell them apart than just reading the text. In CSS, I
          represented the 18 colors by creating respective classes for each (for
          example, the 'fire-type' class would have an orange-red background
          color, 'water-type' class would be a blue background, etc.). Then, in
          the PokeCard React component where each type would be displayed in
          their respective cards, I created a template literal to include the
          type in the className attribute:
        </p>

        <p className="code-snippet">{"className=`poke-type ${type}-type`"}</p>

        <p>
          This code allowed the program to insert the type in the template
          literal, so the className would appear as 'fire-type' or 'water-type'
          on React. Then the app would apply the appropriate CSS property to each word. I
          was particularly proud of this achievement, as it allowed me to apply
          the DRY (Don't Repeat Yourself) principle while also using the .map()
          function to do everything at once without
          having to use any complicated conditional statements.
        </p>
      </div>
    </div>
  );
}
