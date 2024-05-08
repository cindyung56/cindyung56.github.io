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
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-jquery-plain colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-npm-original-wordmark colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-mysql-plain colored"></i>
            <i class="devicon-sequelize-plain colored"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-graphql-plain colored"></i>
            <i class="devicon-python-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-redux-original colored"></i>
            <i class="devicon-visualstudio-plain colored"></i>
            <i class="devicon-github-original colored"></i>
            <i class="devicon-heroku-original colored"></i>
          </div>
                    <Projects />
          <Experience />
          <Footer />
        </div>
      </>
    )
}