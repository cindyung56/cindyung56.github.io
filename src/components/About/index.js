import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLaptopCode,
  faGraduationCap,
  faFileLines,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../images/profile-pic-icon.png";

export default function About() {
  return (
    <div className="about-me" id="about">
      <h1 className="section-title">
        <span class="about-title">About Me</span>
      </h1>

      <div className="profile">
        <div className="pics-and-socials">
          <img src={profilePic} className="profile-pic" alt="profile"></img>
          <div className="social-media-container">
            <ul className="social-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/cindyung56/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/cindyung56" target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/138wTx-3DeunTIsSkguA11H067SSjLPSa/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFileLines} /> Resume
                </a>
              </li>
              <li>
                <a href="mailto:cindyung56@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> E-Mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="biography">
          <div className="basic-info">
            <div className="bio-section">
              <h2>Cindy Ung</h2>
              <h3>
                <FontAwesomeIcon icon={faLaptopCode} /> Full-Stack Web Developer
              </h3>
              <h3>
                <FontAwesomeIcon icon={faLocationDot} /> Los Angeles, CA
              </h3>
            </div>
            <div className="bio-section">
              <h2>Education</h2>
              <h3>
                <FontAwesomeIcon icon={faGraduationCap} /> UCLA Extension Coding
                Bootcamp
              </h3>
              <p>Full-Stack Coding Certificate</p>
              <h3>
                <FontAwesomeIcon icon={faGraduationCap} /> UC Irvine
              </h3>
              <p>Informations, Human Computer Interaction</p>
            </div>
          </div>

          <div className="summary">
            <div className="bio-section" id="summary-section">
              <h2>Summary</h2>
              <p>
                Hi, I'm Cindy! I am a Full Stack Web Developer working primarily
                in JavaScript and React.js, with experience in UI/UX design and
                testing. I enjoy problem solving and turning my ideas into
                dynamic designs and applications. I love collaborating with
                others because teamwork and communication is essential to
                success. I'm always willing to learn new things and meet new
                people! In my free time, some of my hobbies include: playing games, knitting,
                crocheting, and watching cat videos. ฅ^•ﻌ•^ฅ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
