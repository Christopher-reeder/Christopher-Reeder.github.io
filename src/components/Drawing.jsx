import React from 'react';
import Navbar from './Navbar';
import './Drawing.css';

function Drawing() {
  const artworks = [
    {
      imageSrc: '/images/drawing/1.jpg',
      alt: '1',
      description: `
      1`,
    },
    {
      imageSrc: '/images/drawing/2.jpg',
      alt: '2',
      description: `
      2`,
    },
    {
      imageSrc: '/images/drawing/3.jpg',
      alt: '3',
      description: `
      3`,      
    },
  ];

  function getArtwork(art, index) {
    return (
      <div key={index} className="artwork-item">
        <div className="artwork-image">
          <img src={art.imageSrc} alt={art.alt} />
        </div>
          
        <div className="artwork-description">
          <p>{art.description}</p>
        </div>
      </div>
    )
  }

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

        {artworks.map(getArtwork)}   
      </div>
      
    </div>
  );
}

export default Drawing;
