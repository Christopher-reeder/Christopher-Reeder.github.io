import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  const goToProgramming = () => {
    navigate('/Programming');
  };

  const goToDrawing = () => {
    navigate('/Drawing');
  };
  
    return (
      <div>
        <Navbar />
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Welcome to the Website!</h1>
          <p>
            Dive into the worlds of programes and drawings created by Chris Reeder. <br />
            What would you like to explore?
          </p>
        </section>
        <div className="button-container">
          <button className="image-button">
            <img src="/images/programing-icon.png" alt="Programming button" onClick={goToProgramming} />
            <br /><br />Programs
          </button>
          <button className="image-button">
            <img src="/images/about-icon.png" alt="About button" onClick={goToAbout} />
            <br /><br />About
          </button>
          <button className="image-button">
            <img src="/images/drawing-icon.png" alt="Image button" onClick={goToDrawing} />
            <br /><br />Drawings
          </button>
        </div>
      </div>
  );    
}

export default Home;