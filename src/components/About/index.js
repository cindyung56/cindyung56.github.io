import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLaptopCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../images/profile-pic-icon.png";

export default function About() {
  return (
    <div className="about-me" id="about">
      <h1 className="section-title"><span class="about-title">About Me</span></h1>
      <div className="profile">
        <img src={profilePic} className="profile-pic"></img>
        <div className="biography">
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
            <h2>Summary</h2>
            <p>
              Hi, I'm Cindy! I'm a full-stack web developer with experience
              primarily in Javascript and React. 
            </p>
          </div>
          <div className="bio-section">
            <h2>Education</h2>
            <h3><FontAwesomeIcon icon={faGraduationCap}/>{" "}UCLA Extension Coding Bootcamp</h3>
            <p>Full-Stack Coding Certificate</p>
            <h3><FontAwesomeIcon icon={faGraduationCap}/>{" "}UC Irvine</h3>
            <p>Informations, Human Computer Interaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
