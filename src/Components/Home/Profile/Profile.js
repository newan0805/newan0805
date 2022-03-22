import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import cv from "./myCV.pdf";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colzz">
            <div className="colzz-icon">
              <a href="https://mobile.twitter.com/newan0805">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://medium.com/@newan0805">
                <i className="bi bi-medium"></i>
              </a>
              <a href="https://www.instagram.com/ne.waaaaaan/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://github.com/newan0805">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/newan-kumanayaka-75bb871ba/">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}Hello, I'm{" "}
              <span className="highlighted-text">Newan Kumanayaka.</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Learner",
                    2000,
                    "Developer",
                    2000,
                    "Pen-tester",
                    2000,
                    "Musician",
                    2000,
                    "Designer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Enjoying life by learning new things day by day.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <a href={cv} download="Newan_CV.pdf">
              <button className="btnn highlighted-btn">Get Resume</button>
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
