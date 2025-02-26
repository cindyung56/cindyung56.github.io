import React from "react";
import { Parallax } from "react-parallax";
import crescentMoon from "../../images/crescent-moon-from-unsplash.jpg";
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
            <h3>
              Bloksy <span className="work-dates">May 2023 - present</span>
            </h3>
            <ul>
              <li>
                Participated in an agile work environment with fellow developers
                to discuss and plan bi-weekly sprints for upcoming application
                updates using Figma and Jira.
              </li>
              <li>
                Created new components utilizing modern technologies including
                TypeScript, Next.js, PostgreSQL, Apollo, and GraphQL, while also
                maintaining functionality and compatibility with existing
                React.js components.
              </li>
              <li>
                Utilized React Hook Form to create user-friendly forms, learning
                how to control the information received from the form using a
                Yup schema for data validation.
              </li>
              <li>
                Applied front-end and back-end concepts to implement new
                resolvers, retrieve information from the database, and display
                data in a sorted, paginated list.
              </li>
              <li>
                Assisted in troubleshooting and debugging issues across the
                application to ensure quality, performance, and efficiency.
              </li>
            </ul>
          </section>
          <section className="experience-card">
            <h2>Coding Coach</h2>
            <h3>
              theCoderSchool Pasadena{" "}
              <span className="work-dates">March 2020 - present</span>
            </h3>
            <ul>
              <li>
                Offered personalized lessons to students of any age and taught
                them how to code in common, popular languages including Python,
                JavaScript, and Java.
              </li>
              <li>
                Encouraged students to discuss coding concepts together,
                applying what they learned to exercises, projects, quizzes, and
                homework.
              </li>
              <li>Hosted online classes and meetings using Zoom.</li>
              <li>
                Led annual summer camps with fellow coaches and interns to
                provide a fun learning environment for students to learn about
                coding and computers.
              </li>
              <li>
                Supervised annual coding competitions for students to test their
                coding knowledge.
              </li>
              <li>
                Provided feedback to parents on their children's growth and what
                they learn each session using notes and occasional coach-parent
                meetings.
              </li>
              <li>
                Collaborated with other coaches to further improve children's
                experiences learning how to code.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </Parallax>
  );
}
