import React from 'react';
import Navbar from './Navbar';
import './Drawing.css';

function Drawing() {
  return (
    <div>
      <Navbar />
      <div className="sns-links">
        <h2>My Art Portfolio</h2>
        <div className="sns-buttons">
          <a>
            Instagram
          </a>
          <a>
            Pixiv
          </a>
          <a>
            ArtStation
          </a>
        </div>
      </div>

      <div className="artworks">
        <h3>
          {`I enjoy drawing fan art for games and anime, but what I love most is creating concept art for the original stories I’ve envisioned. 
          Below are the three projects I have developed and illustrated the most.`}
        </h3>
      </div>
      
    </div>
  );
}

export default Drawing;
