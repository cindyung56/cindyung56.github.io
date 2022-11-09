import React from "react";
import { Parallax } from "react-parallax";
import blossomImg from "../../images/blossom-from-unsplash.jpg";
// images are all saved from unsplash
import "./style.css";

export default function Home() {
  return (
    <Parallax
      blur={4}
      bgImage={blossomImg}
      bgImageAlt="blossoming flowers"
      id="home"
      className="parallax-section"
    >
      <div className="content">
        <div className="background-box"></div>
        <div className="content-text">
          <h3>Welcome to Cindy's Portfolio!</h3>
          <hr/>
          <p>UX-Focused Full-Stack Developer</p>
        </div>
      </div>
    </Parallax>
  );
}
