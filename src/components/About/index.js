import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLaptopCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../images/profile-pic-icon.png";

export default function About() {
  return (
    <div className="about-me" id="about">
      <h1 className="section-title">
        <span class="about-title">About Me</span>
      </h1>

      <div className="profile">
        <div className="pic-and-socials">
          <img src={profilePic} className="profile-pic" alt="profile"></img>
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
            <div className="bio-section">
              <h2>Summary</h2>
              <p>
                Hi, I'm Cindy! I am a UX-Focused Full Stack Web Developer
                working primarily in JavaScript and React.js. I enjoy problem
                solving and turning my ideas into dynamic designs and
                applications. I love collaborating with others and I believe
                teamwork and communication is essential to success. I'm always
                willing to learn new things and meet new people! Some of my
                hobbies include: playing games, crocheting, and watching cat
                videos. ฅ^•ﻌ•^ฅ Please feel free to send me an email or connect
                with me on LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
