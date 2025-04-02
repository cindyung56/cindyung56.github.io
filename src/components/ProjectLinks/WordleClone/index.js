import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import images
import wordle1 from "./images/wordle1.jpg";
import wordle2 from "./images/wordle2.jpg";

export default function WordleClone() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Wordle Clone</h1>
      </div>
      <div className="p-links">
        <a
          href="https://cindyung56.github.io/weather-dashboard/"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a
          href="https://github.com/cindyung56/wordle-clone"
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
            <b>Languages/Libraries/Frameworks Used:</b> HTML, CSS, JavaScript,
            Animate.css
          </li>
          <li>
            <b>Group Members:</b> Solo project!
          </li>
          <li>
            <b>Website Description:</b> A recreation of the popular game Wordle
            using HTML, CSS, and JavaScript. Players can guess a five-letter
            word that will gradually give hints based on the letters that match
            and/or may be in the wrong positions.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          The Wordle Clone is a simple frontend application that recreates the
          popular game that took the internet by storm. Wordle is a game that
          gives players 6 chances to guess a five letter word. With each try,
          the game will tell the user hints based off of the letters inputted. A
          green letter indicates a letter that is in the right spot; a yellow
          letter hints that the letter is in the word, but in the wrong
          position; a grey letter means that specific letter is not in the word
          at all. This information persists throughout the entire game and will
          end when the user runs out of tries, or guesses the correct word. It
          is fun and simple, but surprisingly difficult to master.
        </p>

        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={wordle2} alt="getting the word correct" />
              <p className="legend">
                Getting the word correct by correctly guessing the word via
                hints.
              </p>
            </div>
            <div>
              <img src={wordle1} alt="running out of tries" />
              <p className="legend">
                Running out of tries and seeing the final word in the end.
              </p>
            </div>
          </Carousel>
        </div>

        <h2>RESPONSIBILITIES / CODING PROCESS</h2>
        <p>
          I had the thought to replicate Wordle as I was playing it one day,
          thinking that the game itself would be a fun project. I wanted to get
          better at implementing animations with CSS, and happened to find
          Animate.css which helped me with the animations for the Wordle clone.
          I started by creating the blank game board using HTML elements and
          JavaScript to loop 6 times and create each row for each try. After
          creating the interactive keyboard on the app, I used event listeners
          to look out for either a click on the interactive keyboard, or an
          actual key press from an external keyboard. Both options can be used
          to insert a letter into the board. With each button press, an array in
          the JavaScript file will update with the letters until it reaches a
          length of 5; any more than 5 will be invalid. Likewise, if the user
          hits the Backspace key or the DEL button, the array will update to
          change the value back to 0, decrementing the index until it is back at
          0. Error handling was needed to ensure that the index stayed in the
          range from 0 to 4. With each edit to the array, the game board also
          updates with the new additions or deletions. Another thing to keep in
          mind was that all words had alphabetical characters, so a regular
          expression was used to ensure only letters were accepted.
        </p>

        <p>
          The most challenging part was checking each letter's validity and
          changing the colors on the board. To help with this, I created an
          object that stored all 26 letters of the alphabet as keys, with values
          of white to start off. When the user submits a guess, the app scans
          through all 5 letters and checks to see if the letter is in the word
          and/or in the right position. If both conditions are satisfied, the
          object is updated to change the value from white to green. If the
          letter is in the wrong position, the color is changed to yellow, but
          only if its value was not green already. This is to ensure that the
          user can see that they were still correct in a previous guess, even if
          it is not in the current guess. (The original Wordle game also has
          this feature.) If neither condition is correct, the value changes to
          grey. After the object is updated, the app will update both the guess
          and the specific keys on the keyboard and change their colors
          accordingly.
        </p>

        <p>
          After the main code was complete, I went to implementing the
          animations for when a letter was inputted. I already ran into some
          problems here; the main issue with this was that I coded the
          animations for EVERY letter via a for loop, and not just the single
          newly-added letter. I had to fix the code here to only implement the
          animation on the current index using a global variable. The other
          animation I had to implement was flipping each box in a row once the
          user submitted a guess. This was easier than expected, and I used the
          setTimeout function to flip each box one after another in a for loop.
          At the same time, the colors on the keyboard would also change color
          with each box flip.
        </p>
      </div>
    </div>
  );
}
