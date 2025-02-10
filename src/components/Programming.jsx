import React from 'react';
import Navbar from './Navbar';
import './Programming.css';

function Programming() {
  const codes = [
    {
      link: '1',
      programLanguage: '11',
      imageSrc: '111',
      description: `111111111`,
    },
    {
      link: '2',
      programLanguage: '22',
      imageSrc: '222',
      description: `2222222222`,
    },
    {
      link: '3',
      programLanguage: '33',
      imageSrc: '3',
      description: `3333333333333333`,
    },
    {
      link: '4',
      programLanguage: '4',
      imageSrc: '444',
      description: `444444444`,
    },
  ];
  
  function getCodes(code, index) {
    return (
      <div key={index} className="code-item">
        <div className="code-button">
          <a href={code.link} target="_blank" rel="noreferrer">
            <img src={code.imageSrc} alt={code.programLanguage} className="code-image" />
            <p >{code.programLanguage}</p>
          </a>
        </div>
        <div className="code-description">
          <p>{code.description}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <Navbar />
      <div className="github-link">
        <h2>My Computer Science Portfolio</h2>
        <div className="github-button">
          <a href="" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="P-body">
        <h3>
          {`I'm still in the early stages of learning, but I enjoy coding and finding the process of problem-solving to be exciting and rewarding. 
          Below are the programming languages I have learned so far.`}
        </h3>
        {codes.map(getCodes)}
      </div>
    </div>
  );
}

export default Programming;
