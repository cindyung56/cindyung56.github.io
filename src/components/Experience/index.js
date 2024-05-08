import React from "react";
import { Parallax } from "react-parallax";
import crescentMoon from "../../images/crescent-moon-from-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Experience() {
  return (
    <Parallax
      blur={4}
      bgImage={crescentMoon}
      bgImageAlt="crescent moon from unsplash"
      className="parallax-section"
    >
      <section className="experience-section" id="experience">
        <h2 className="content-text experience-title">Experience</h2>
        <div className="experience-div">
          <h2>Bloksy</h2>
        </div>
        <div className="experience-div">
          <h2>Coding Coach</h2>
        </div>
        <div className="experience-div">
          <h2>Data Entry Assistant</h2>
        </div>
      </section>
    </Parallax>
  );
}
