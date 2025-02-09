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
            src="/images/face.png" alt="Chris' face photo"
          />
        </div>

        <div className="about-text">
          <h1>Christopher Kade Reeder</h1>
          <p style={{ borderBottom: '2px solid', paddingBottom: '2rem' }}>
            Hello! I'm <strong>Christopher Kade Reeder</strong>, a Computing
            Science major at SFU. I began my programming journey at the age of 20
            and have been drawing since I was 15. While my main focus is on
            Computing Science, I continue to nurture my passion for art on the
            side. 
          </p>

          <h2>Skills & Tools</h2>
          <ul style={{ borderBottom: '2px solid', paddingBottom: '2rem' }}>
            <li>
              <strong>Programming Languages:</strong> C/C++, Python, Java,
              Assembly
            </li>
            <li>
              <strong>Frameworks & Tools:</strong> React, Unity
            </li>
            <li>
              <strong>Art Software:</strong> Photoshop, Clip Studio
            </li>
          </ul>
        </div>
      </div>
      <div className="about-bottom-container">
        <h2>Values</h2>
        <p>
          In my programming, I place a high priority on writing code that is
          clear and concise. I believe that well-structured, readable code leads
          to better collaboration and easier maintenance. Since I'm still in the
          process of learning, I make a point to explore multiple approaches and
          techniques. This helps me broaden my skillset and deepen my
          understanding of various paradigms, ultimately guiding me toward a
          more robust and adaptable coding style.
        </p>
        <p>
          As for my artwork, I focus on a heavily stylized approach yet strive
          to convey a sense of poetic and lyrical nuance. Sometimes it can be a
          slow process, but I believe that taking the time to experiment with
          different methods is essential for my creative growth. Whether it's
          testing new color palettes or refining my line work, each exploration
          teaches me something new about composition, storytelling, and artistic
          expression.
        </p>
        <p>
          My overarching philosophy is to remain open-minded and curious, both
          in coding and art. By embracing experimentation and continuous
          learning, I hope to create meaningful work that speaks to my personal
          style while pushing the boundaries of what's possible.
        </p>
      </div>
    </div>
  );
}
