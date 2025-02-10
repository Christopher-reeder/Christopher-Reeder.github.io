import React from 'react';
import Navbar from './Navbar';
import './Programming.css';

function Programming() {
  return (
    <div>
      <Navbar />
      <div className="github-link">
        <h2>My Computer Science Portfolio</h2>
        <div className="github-button">
          <a href="123" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="P-body">
        <h3>
          {`I'm still in the early stages of learning, but I enjoy coding and finding the process of problem-solving to be exciting and rewarding. 
          Below are the programming languages I have learned so far.`}
        </h3>
      </div>
    </div>
  );
}

export default Programming;
