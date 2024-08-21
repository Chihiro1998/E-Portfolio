import React, { useState, useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import Project01 from "../../../src/img/Projects/Project1.jpg";
import Project02 from "../../../src/img/Projects/Project2.png";
import Project03 from "../../../src/img/Projects/Project3.png";
import Project04 from "../../../src/img/Projects/Project4.png";

export default function Project(props) {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [fadeIn, setFadeIn] = useState(false);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderProjects = () => {
    switch (activeTab) {
      case "Tab1":
        return (
          <div className="projects">
            <div className="project-item">
              <div className="project-image-container">
                <img src={Project01} alt="Project 1" />
                <div className="overlay">
                  <div className="project-name-overlay">
                    Memories - Social Application
                  </div>
                </div>
              </div>
              <div className="project-description">
                <h3>Memories - Social Application</h3>
                <p className="tech-stack">
                  Tech Stack: MongoDB, Express.js,React.js, Node.js
                </p>
                <p className="project-Introduction">
                  Introduction: A Social Media App allows users to record
                  interesting moments in their lives and supports features such
                  as login,posting memories, commenting,searching,and
                  recommendations.
                </p>
                <p className="bullet-point">
                  · Implemented Test-DrivenDevelopment(TDD) to increase code
                  test coverage and improve code quality. Introduced CI/CD tools
                  to enhance development efficiency.
                </p>
                <p className="bullet-point">
                  · Optimized MongoDB query performance by creating appropriate
                  indexes and implementing pagination,resulting in a 41%
                  reduction in query time.
                </p>
                <p className="bullet-point">
                  · Implemented the express-rate-limit rate limiting component
                  to protect the system and improve system stability.
                </p>
                <p className="bullet-point">
                  · Utilized DFA(Deterministic Finite Automaton) algorithm for
                  sensitive word filtering, reducing the content risk rate by
                  75%.
                </p>
                <a
                  href="URL_TO_YOUR_GITHUB_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Code
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={Project02} alt="Project 2" />
                <div className="overlay">
                  <div className="project-name-overlay">
                    Responsive E-Portfolio Web
                  </div>
                </div>
              </div>
              <div className="project-description">
                <h3>Responsive E-Portfolio Web</h3>
                <p className="tech-stack">
                  Tech Stack: React, Node.js,Bootstrap,Express.js,Rx.js
                </p>
                <p className="project-Introduction">
                  Introduction: The E-Portfolio project is a dynamic and
                  interactive web application designed to showcase my
                  professional skills, projects, and experiences.
                </p>
                <p className="bullet-point">
                  · Created a mobile-responsive E-Portfolio using React,
                  Bootstrap, and professional web design principles, ensuring
                  smooth scrolling and engaging animations with RxJs and fade-in
                  effects.
                </p>
                <p className="bullet-point">
                  · Implemented interactive features such as a contact form
                  using NodeMailer to securely send messages to my Google Email
                  via Gmail SMTP.
                </p>
                <p className="bullet-point">
                  · Utilized environment variables for authentication and
                  ensured user input validation and error handling.
                </p>
                <p className="bullet-point">
                  · Deployed the E-Portfolio to Heroku, integrated version
                  control with GitHub, provided downloadable resources (PDF),
                  dynamic typing effects with React Typical, and middleware in
                  Node.js for efficient handling of requests and responses.
                </p>
                <a
                  href="URL_TO_YOUR_GITHUB_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        );
      case "Tab2":
        return (
          <div className="projects">
            <div className="project-item">
              <div className="project-image-container">
                <img src={Project03} alt="Project 3" />
                <div className="overlay">
                  <div className="project-name-overlay">Car Rental Service</div>
                </div>
              </div>
              <div className="project-description">
                <h3>Car Rental Service</h3>
                <p className="tech-stack">
                  Tech Stack: Angular, TypeScript, SpringBoot,MySQL,Ng Zorro
                </p>
                <p>
                  INtroduction1: A car rental trading platform where companies
                  can post the cars they have available for rent and customers
                  can retrieve the car they need to use and set a rental date to
                  start renting it.
                </p>
                <p className="bullet-point">
                  · Developed robust RESTful APIs for managing vehicles,
                  customer bookings, and rental transactions, ensuring efficient
                  and scalable backend services.
                </p>
                <p className="bullet-point">
                  · Designed and implemented an intuitive and user-friendly
                  interface using Angular, enabling seamless interactions for
                  customers and staff with real-time data updates and responsive
                  design.
                </p>
                <p className="bullet-point">
                  · Implemented authentication and authorization mechanisms to
                  protect sensitive information and ensure secure data
                  transactions, enhancing the system's overall security.
                </p>
                <p className="bullet-point">
                  · Conducted extensive unit and integration testing to achieve
                  over 90% test coverage, ensuring application stability and
                  reliability across different browsers and devices.
                </p>
                <a
                  href="URL_TO_YOUR_GITHUB_3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Code
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={Project04} alt="Project 4" />
                <div className="overlay">
                  <div className="project-name-overlay">
                    {" "}
                    Full Stack Home Rentals Application
                  </div>
                </div>
              </div>
              <div className="project-description">
                <h3> Full Stack Home Rentals Application</h3>
                <p>
                  Introduction:A Full Stack Home Rentals application that allows
                  users to list properties in various categories, view detailed
                  listings, and manage their property and booking preferences.
                  The application features user authentication, property
                  management, photo uploads, booking functionalities, and more,
                  providing a seamless and efficient experience for users
                  looking to rent homes.
                </p>
                <p className="tech-stack">
                  Tech Stack:React.js,Redux,Node.js,MongoDB,JWT,Material UI
                </p>
                <p className="bullet-point">
                  · Implemented secure sign-up and log-in features using JWT and
                  Bcrypt for password hashing, ensuring user data privacy and
                  protection.
                </p>
                <p className="bullet-point">
                  · Developed functionalities for users to create new property
                  listings with detailed information, including options to
                  upload, delete, and drag & drop photos.
                </p>
                <p className="bullet-point">
                  · Integrated a calendar feature to enable users to create and
                  manage bookings, enhancing the user experience with
                  streamlined scheduling.
                </p>
                <a
                  href="URL_TO_YOUR_GITHUB_4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        );
      case "Tab3":
        return (
          <div className="projects">
            <div className="project-item">
              <div className="project-image-container">
                <img src="" alt="Project 5" />
                <div className="overlay">
                  <div className="project-name-overlay">InvMicroServices</div>
                </div>
              </div>
              <div className="project-description">
                <h3>InvMicroServices</h3>
                <p>
                  Designed and Developed the development of a REST API-based
                  microservice system designed to streamline business operation
                  and enhance system throughput.
                </p>
                <p className="tech-stack">
                  Tech Stack: Django, Python, HTML, CSS
                </p>
                <a
                  href="URL_TO_YOUR_GITHUB_5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src="" alt="Project 6" />
                <div className="overlay">
                  <div className="project-name-overlay">
                    Waiting for updates
                  </div>
                </div>
              </div>
              <div className="project-description">
                <h3>Waiting for updates</h3>
                <p className="tech-stack">Tech Stack: Waiting for updates</p>

                <a
                  href="URL_TO_YOUR_GITHUB_6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`project-container ${fadeIn ? "fade-in" : ""}`}
      id={props.id || ""}
    >
      <ScreenHeading title={"Projects"} subHeading={"My Selective Projects"} />
      <section className="project-section">
        <div className="project-tabs">
          <button
            className={`tab-button ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab1")}
          >
            Tab 1
          </button>
          <button
            className={`tab-button ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab2")}
          >
            Tab 2
          </button>
          <button
            className={`tab-button ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab3")}
          >
            Tab 3
          </button>
        </div>
        <div className="project-content">{renderProjects()}</div>
      </section>
    </div>
  );
}
