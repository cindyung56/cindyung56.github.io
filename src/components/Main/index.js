import React from "react";
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Footer from "../Footer";

export default function Main(){
    return(
        <>
        <Navigation />
        
        <div className="main-body">
          <Home />
          <About />

          <div className="skills-section">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-visualstudio-plain colored"></i>
            <i className="devicon-github-original colored"></i>
          </div>
          <Projects />
          <div className="skills-section">
            <i className="devicon-jquery-plain colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-npm-original-wordmark colored"></i>
            <i className="devicon-express-original colored"></i>
            <i className="devicon-mysql-plain colored"></i>
            <i className="devicon-sequelize-plain colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-graphql-plain colored"></i>
            <i className="devicon-heroku-original colored"></i>
          </div>
          <Experience />
          <Footer />
        </div>
      </>
    )
}