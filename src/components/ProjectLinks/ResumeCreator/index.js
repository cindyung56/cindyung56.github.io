import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// importing images
import teamPic from "./images/team.png";
import resumeCreator1 from "./images/rc1.jpg";

export default function ResumeCreator() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Resume Creator</h1>
      </div>
      <div className="p-links">
        <a
          href="https://github.com/cindyung56/resume-creator"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faGithub} />
          {"  "}GitHub
        </a>
      </div>

      <div className="p-description">
        <ul>
          <li>
            <b>Languages/Libraries/Frameworks Used:</b> HTML, CSS, JavaScript,
            jQuery, Handlebars.js, express.js, MySQL, Sequelize
          </li>
          <li>
            <b>Group:</b> Anonymous Dinosaurs (
            <a href="https://github.com/camilleyong" className="external-link">
              Camille Yong
            </a>
            ,{" "}
            <a href="https://github.com/Proper-Stevo" className="external-link">
              Steven Barrios
            </a>
            ,{" "}
            <a href="https://github.com/toddrgarner" className="external-link">
              Todd Garner
            </a>
            )
          </li>
          <li>
            <b>Website Description:</b> Create a simple and interactive resume
            application that everyone can use. Our application provides a simple
            form for you to fill out, and templates to style your resume from.
          </li>
        </ul>

        <p className="team-img">
          <img src={teamPic} alt="team pic" />
        </p>

        <h2> ABOUT </h2>
        <p>
          Resume Creator is a full-stack application that generates a resume on
          the browser. Upon logging in, the user fills out a form about their
          experience and contact information. This includes professional
          experiences and opportunities, education, and personal skills. The
          user can also choose a template to style their resume. Once the form
          is submitted, the application will generate a web based resume with
          all of the information they inputted in an easy to read format,
          without having to deal with the styling themselves!
        </p>

        <p>
          Anonymous Dinosaurs created this application for job seekers looking
          for resume design templates and the ability to preview their
          experiences and information in a premade format.
        </p>
        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={resumeCreator1} alt="form"></img>
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>
          For this project, I was one of the full-stack developers working on
          the application. I was in charge of implementing the backend, which at
          the time felt like a daunting task as I had only done simple frontend
          design. However, I wanted to challenge myself and step out of my
          comfort zone, so I volunteered to lead the backend effort. We split
          the work in half between the four of us, and I paired with Steven to
          implement the backend and connect it to the MySQL database using
          Sequelize. We used models to determine what data would be inserted,
          and controllers to create functions and relations between each model
          in the database. I worked on creating the GET, POST, and PUT requests
          to save the user's form data in the database and update it whenever
          necessary. We tested out the API calls using Insomnia to make sure
          data was being added properly in MySQL.
        </p>

        <p>
          An unexpected challenge we faced was one of our team members Camille
          getting sick halfway during our development process, to the point
          where she unfortunately had to go to the hospital to rest and
          recuperate. Though we were down a team member temporarily, we decided
          to split her responsibilites amongst the remaining three of us as best
          we could so she could focus on resting and getting better. I
          challenged myself to connect the frontend and backend using the API I
          created. I created the functionalities needed to submit all of the
          form information to be added in the database. The biggest task I had
          was to retrieve that data and pass it to our template forms created
          using Handlebars.js. It was difficult to do this, as everybody's
          templates were all formatted differently and we weren't as familiar
          with using Handlebars.js compared to regular HTML/CSS/JavaScript. We
          came up with a solution to help each other with parsing the data, and
          I actually ended up creating my Handlebars file first as an example
          for the other developers. By this time, I was already the defacto lead
          for both the frontend and backend and wanted to see it through to the
          very end. We managed to complete our minimum viable product in time to
          be presented with a (mostly) functional application.
        </p>

        <p>
          I am proud of what my group and I were able to do for this project,
          but there were a few points of personal regret that I had as well. We
          initially had an idea to import the generated template to be a word
          document or PDF file, but then we quickly realized there were no
          existing frameworks or libraries that could convert a webpage to a PDF
          file. Combined with Camille getting sick and our deadline of one week
          to deliver a working prototype, we did not have enough time to
          research this in more detail and could not make that functionality a
          reality.
        </p>
        <p>
          Another regret I had around this time was the obvious burnout I had by
          the time we presented our application. While I enjoyed working on the
          project and did all my tasks properly, I spent many days coding for
          hours without breaks while also having to focus to my part time job.
          Working on this project for so long also made me feel like my code was
          very messy and unorganized. While I do regret these things, I also
          think I obtained a valuable experience and understanding of how full
          stack programming works. I learned from my mistakes and discovered the
          importance of pacing myself and taking breaks.
        </p>
      </div>
    </div>
  );
}
