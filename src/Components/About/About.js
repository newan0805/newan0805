import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="main-parent">
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile" />
          <div className="about-me-details">
            <span className="about-me-description">
              I'm a person who is always loved to work with society with a
              smile. And my courageous dedication is my own strength. I spend my
              free time with music and forums.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>
                  Here are a Few Highlights About My Self Passionates:
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Electronics lover since childhood.</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Artist from my family background.</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Developer (Web, Native, Arduino, etc.)</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Science clinician.</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Nature lover.</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Pentration tester (Cyber-security apprentice)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
