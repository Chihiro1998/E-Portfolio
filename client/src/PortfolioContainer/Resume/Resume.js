import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Professional Experience", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "projects.svg" },
    { label: "Projects", logoSrc: "programming-skills.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "MongoDB", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024.01", toDate: "2024.03" },
      description:
        "• A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading:
        "Technologies: React JS, JavaScript,Rxjs, Node JS, Express JS",
    },
    {
      title: "Social Media Application - Memories ",
      duration: { fromDate: "2024.03", toDate: "2024.06" },
      description: `A full-stack Social Media app using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. The app allows users to record interesting moments in their lives and supports features suach as login, posting memories, commenting, searching, and recommendations.`,
      subHeading: "Technologies:MongoDB, Express, React, Node",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Northeastern University, US"}
        subHeading={"Master of Computer Science"}
        fromDate={"2023"}
        toDate={"present"}
        description=" Courses: Intensive Foundations of CS (python), Discrete Structures, Object-Oriented Design in Java, Data Structure& Algorithm(C programming), Web Development, Computer System"
      />
      <ResumeHeading
        heading={"University of Shenzhen, China"}
        subHeading={"Bachelor of Architecture"}
        fromDate={"2017"}
        toDate={"2022"}
        description=" Honor: Second Prize in Academic Scholarship(3%), First Prize for Cultural and Sports Scholarships (1%), Second Prize of ICDBC International Student Concrete Dragon Boat Design Competition (2%)"
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Convoloo"}
          subHeading={"SOFTWARE ENGINEER INTERN"}
          fromDate={"2023.06"}
          toDate={"Present"}
        />
        <div className="experience-description"></div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed and Developed a “Integrated Policy Managment System”
            using Angular for frontend and Spring Boot for backend, streamlining
            policy management and claims processing.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented secure document storage and retrieval by integrating
            AWS S3, enabling efficient handling of over 100,000 insurance
            documents, including unstructured files.{" "}
          </span>
          <br />
          <br />
          <ResumeHeading
            heading={"SkillUpIt"}
            subHeading={"BACK-END DEVELOPER INTERN"}
            fromDate={"2023.04"}
            toDate={"2023.09"}
          />
          <span className="resume-description-text">
            - Participated in planning and executing the "Limited Time Discount
            & Buy Now" business feature with Java.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Improved throughput tenfold{" "}
            <strong>from thousands to tens of thousands QPS</strong>
            by integrating Redis and RocketMQ into the MySQL master-slave
            architecture for improved data flow.
          </span>
          <br />
          <span className="resume-description-text">
            - Split order service into discount and order microservices
            according to DDD(Domain Driving Design) principles.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Enhanced test coverage from <strong>60% to 85%</strong> by
            developing unit tests with JUnit and Mockito.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented cache preheating for active promotions with Redis and
            Lua scripts.{" "}
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Drawing/Design"
        description="As a former designer, I still love all things beautiful and enjoy drawing and designing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Swimming"
        description="Swimming is my favorite way to relax, and my favorite and best is freestyle."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oop"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
