import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectData from "./Project_data";

function Projetcs() {
  return (
    <>
      <div className="card-main">
        <div className="card-me-parent">
          <div className="card-heading-container">
            <div className="card-screen-heading">
              <span>Projects</span>
            </div>
            <div className="card-screen-sub-heading">
              <span>Projects done by me</span>
            </div>
            <div className="card-heading-seperator">
              <div className="card-seperator-line"></div>
              <div className="card-seperator-blob">
                <div></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <ProjectData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetcs;
