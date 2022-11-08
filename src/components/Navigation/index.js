import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faRectangleList,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import './style.css';

export default function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#home" className="nav-link">
            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
            <span class="icon-title">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <span class="icon-title">About</span>
          </a>
        </li>

        <li>
          <a href="#projects" className="nav-link">
            <FontAwesomeIcon icon={faRectangleList} className="nav-icon" />
            <span class="icon-title">Projects</span>
          </a>
        </li>

        <li>
          <a href="#contact" className="nav-link">
            <FontAwesomeIcon icon={faPhone} className="nav-icon" />
            <span class="icon-title">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
