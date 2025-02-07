import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
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
      </div>
  );    
}

export default Home;