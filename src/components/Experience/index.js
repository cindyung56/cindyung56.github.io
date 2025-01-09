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
        <h2 className="exp-heading">
          <span className="content-text experience-title">Experience</span>
        </h2>
        <div className="experience-div">
          <section className="experience-card">
            <h2>Software Developer</h2>
            <h3>Bloksy</h3>
            <p>
              <ul>
                <li></li>
              </ul>
            </p>
          </section>
          <section className="experience-card">
            <h2>Coding Coach</h2>
            <h3>theCoderSchool Pasadena</h3>
          </section>
          <section className="experience-card">
            <h2>Data Entry Assistant</h2>
            <h3>All For One Accounting</h3>
          </section>
        </div>
      </section>
    </Parallax>
  );
}
