import React from "react";
import "./About.css";
import Navbar from './Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-top-container">
        <div className="about-image">
          <img
            src="/images/face.png"
          />
        </div>

        <div>
          <h1>Christopher Kade Reeder</h1>
          <p>
            welcome
          </p>

          <h2>Skills & Tools</h2>
          <ul>
            123
          </ul>
        </div>
      </div>
      <div className="about-bottom-container">
        <h2>Values</h2>
        <p>
          123
        </p>
      </div>
    </div>
  );
}
