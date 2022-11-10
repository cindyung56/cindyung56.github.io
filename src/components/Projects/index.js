import React from "react";
import { Parallax } from "react-parallax";
import beachPic from "../../images/beach-from-unsplash.jpg";
import crescentMoon from "../../images/crescent-moon-from-unsplash.jpg";
import "./style.css";

export default function Projects() {
  return (
    <Parallax
      blur={4}
      bgImage={beachPic}
      bgImageAlt="beach from unsplash"
      className="parallax-section"
    >
      <div className="content" id="projects">
        <h2 className="content-text projects-title">Projects</h2>
        <div className="projects-div"></div>
      </div>
    </Parallax>
  );
}
