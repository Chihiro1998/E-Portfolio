import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz ">
            <div className="colz-icon">
              <a href="https://twitter.com/Chichi_kuang">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/chichi_kuang/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/yuchen-kuang-0922b7287/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Yuchen Kuang</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Crazy Fast Learner",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Ex Product Manager",
                    1000,
                    "Ex-Designer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of front-end design and back-end operations to build
                applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="YuchenKuang.pdf" download="YuchenKuang_cv.pdf">
              <button className="btn highlight-btn">Learn More</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
