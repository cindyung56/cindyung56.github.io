import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../project-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//import images
import weatherDash1 from "./images/wd1.png";
import weatherDash2 from "./images/wd2.png";

export default function WeatherDashboard() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">Weather Dashboard</h1>
      </div>
      <div className="p-links">
        <a
          href="https://cindyung56.github.io/weather-dashboard/"
          target="_blank"
          rel="noreferrer"
          className="p-link-btn"
        >
          <FontAwesomeIcon icon={faLink} />
          {"  "}Website
        </a>
        <a
          href="https://github.com/cindyung56/weather-dashboard"
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
            Bootstrap
          </li>
          <li>
            <b>APIs Used:</b>{" "}
            <a href="https://openweathermap.org/api" className="external-link">
              OpenWeather API
            </a>{" "}
            (Geocoding, Current weather data, and OneCall API v2.5)
          </li>
          <li>
            <b>Group Members:</b> 1 (me, myself, and I)
          </li>
          <li>
            <b>Website Description:</b> A front-end application of a weather
            dashboard that shows a city's current weather conditions and
            forecast for the next 5 days using the OpenWeather API.
          </li>
        </ul>

        <h2> ABOUT </h2>
        <p>
          The Weather Dashboard is a front-end application that displays a
          city's weather conditions and temperature for the next five days. It
          provides various types of information such as temperature, wind speed,
          humidity, and UV index of the current day. There is also a five day
          forecast displaying the predicted weather conditions for that city.
          The search history is saved for future reference, and saves up to the
          last 10 cities inputted.
        </p>

        <div className="carousel-div">
          <Carousel className="carousel" axis="horizontal" showArrows={false}>
            <div>
              <img src={weatherDash1} alt="weather dashboard search" />
              <p className="legend">
                Searching the weather forecast for the next 5 days in Los
                Angeles
              </p>
            </div>
            <div>
              <img src={weatherDash2} alt="weather dashboard history" />
              <p className="legend">
                Using search history to get weather data for a previously
                searched city
              </p>
            </div>
          </Carousel>
        </div>
        <h2>RESPONSIBILITIES</h2>
        <p>
          This project was fun and worthwhile to do, especially because I was
          able to use a free API to get all of the information I wanted. I used
          Bootstrap to create the general layout of the website, wanting to keep
          everything on one screen for reading accessibility without having to
          scroll for more information. Bootstrap rows and columns were immensely
          helpful in creating the three sections. The main feature of the
          website was using the OpenWeather API to fetch all necessary
          information. Luckily, the Geocoding and Current weather data APIs were
          both free to use. I used Postman and Insomnia to test out the API
          calls first, before fetching the data in my project.
        </p>

        <p>
          The biggest challenge was the UV index, which is a colored number that
          only spans a small section, rather than the entire line. Not only did
          I have to code which color should be displayed, I also had to figure
          out how to get this information in the first place. None of the free
          APIs from OpenWeather included this in the data. I searched up other
          free APIs that could give me this information, and found{" "}
          <a href="https://www.openuv.io/" className="external-link">
            OpenUV API
          </a>
          . OpenUV API even included a chart of UV index colors, which I
          referenced in my code. (<b>NOTE</b>: the home page looks vastly
          different nowadays; currently, it looks like this color chart is not
          displayed on the website.) However, despite the fetch requests working
          initially, the API suddenly crashed and returned 500 errors instead of
          the usual 200 OK response code. In the end, a fellow developer handed
          out his API key for me to use the paid OpenCall API (v2.5). I kept the
          color chart to display the UV index in their respective colors, using
          a{" "}
          <span className="code-snippet">
            {"<"}span
            {">"}
          </span>{" "}
          tag to keep the color restricted to the number, and not the entire
          line.
        </p>

        <p>
          If I were to come back to this project (which I might do in the near
          future!) I would change the user interface and try out my hand at
          different designs. While this website is very straightforward and
          simple to read, I would love to try my hand at different ways of
          displaying the information using more colors and modern design
          practices. I also think that coming back to this project would allow
          me the chance to review my old code and possibly edit anything that I
          would do differently nowadays.
        </p>
      </div>
    </div>
  );
}
