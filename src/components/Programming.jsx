import React from 'react';
import Navbar from './Navbar';
import './Programming.css';

function Programming() {
  const codes = [
    {
      link: 'https://github.com/Christopher-reeder/Play-List',
      programLanguage: 'C++',
      imageSrc: '/images/C++.png',
      description: `Name: Playlist Manager

      Date: 2024/09/15

      Description:
      Play List is a C++ console application for managing a music playlist. Users can add, remove, swap, and view songs, with each entry storing details like title, artist, and duration. The program utilizes object-oriented programming principles with separate Song and PlayList classes to handle data efficiently. It features dynamic data management, user input validation, and structured menu-driven interaction, demonstrating proficiency in C++ application development.`,
    },
    {
      link: 'https://github.com/Christopher-reeder/Mario-Game',
      programLanguage: 'Python',
      imageSrc: '/images/python.png',
      description: `Name: Mario Game

      Date: 2023/11/26

      Description:
      Mario Game is a maze game that simulates a simple grid-based movement system. Users navigate Mario through a maze while avoiding obstacles and collecting treasures. The game generates a maze from an input file, places Mario at a starting position, and assigns an exit gate at the farthest possible location. The player interacts through console commands to move Mario, and the game updates in real-time based on movement and interactions with obstacles. The project demonstrates structured programming, file handling, and grid-based game logic implementation.`,
    },
    {
      link: 'https://github.com/Christopher-reeder/Important-Day-Manager',
      programLanguage: 'Java',
      imageSrc: '/images/java.png',
      description: `Name: Important Day Manager

      Date: 2025/01/22

      Description:
      Important Days Tracker is a Java-based console application for managing significant dates. Users can add, remove, list, and search for important days, each recorded with a name, date, and description. The program utilizes an ImportantDayManager to handle data storage and retrieval, providing an interactive command-line interface for user input. This project demonstrates structured programming, object-oriented design, and efficient data management in Java.`,
    },
    {
      link: 'https://github.com/Christopher-reeder/Christopher-Reeder.github.io',
      programLanguage: 'JavaScript',
      imageSrc: '/images/java-script.png',
      description: `Name: Portfolio Website

      Date: 2025/02/05

      Description:
      Portfolio Website which is this website now is a React-based application. It features sections dedicated to programming projects and artwork, providing an interactive user experience through a structured navigation system. Built using React Router, the site enables seamless navigation between the home, about, programming, and drawing pages. This project demonstrates proficiency in React, component-based architecture, and client-side routing.`,
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
          <a href="https://github.com/Christopher-reeder" target="_blank" rel="noreferrer">GitHub</a>
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
