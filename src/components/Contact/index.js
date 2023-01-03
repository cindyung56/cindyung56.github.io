import React from "react";
import { Parallax } from "react-parallax";
import crescentMoon from "../../images/crescent-moon-from-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Contact() {
  return (
    <Parallax
      blur={4}
      bgImage={crescentMoon}
      bgImageAlt="crescent moon from unsplash"
      className="parallax-section"
    >
      <section className="content contact-content" id="contact">
        <h2 className="content-text contact-title">Contact Me!</h2>
        <div className="contact-div">
          <a href="https://drive.google.com/file/d/1OeVFoVRKXn9i_JDKsUDlBcIf-t4wlAp-/view?usp=sharing">
            <button className="contact-btn" id="resume">
              <FontAwesomeIcon icon={faFileLines}/>{" "}
              Resume
            </button>
          </a>
          <a href="https://www.linkedin.com/in/cindyung56/">
            <button className="contact-btn" id="linkedin">
            <FontAwesomeIcon icon={faLinkedin}/>{" "}
              LinkedIn
            </button>
          </a>
          <a href="mailto:cindyung56@gmail.com">
            <button className="contact-btn" id="email">
            <FontAwesomeIcon icon={faEnvelope}/>{" "}
              Email
            </button>
          </a>
        </div>
      </section>
    </Parallax>
  );
}
