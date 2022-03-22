import "./Home.css";
import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import About from "../About/About";
import Projetcs from "../Project/Projetcs";
import Project_data from "../Project/Project_data";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
      <About />
      <Projetcs />
    </div>
  );
}
