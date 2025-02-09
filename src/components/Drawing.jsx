import React from 'react';
import Navbar from './Navbar';
import './Drawing.css';

function Drawing() {
  const artworks = [
    {
      imageSrc: '/images/drawing/1.jpg',
      alt: 'Drawing of a boy piggybacking a girl.',
      description: `
      Title: Parhelion

      Date Drawn: 2024/07/30
      
      Description: 
      A modern fantasy story about a Gumiho girl, a mythical nine-tailed fox capable of transforming into a human, and a morally flawed boy who, despite being human, possesses special abilities for unknown reasons. Together with their new friends, they solve supernatural incidents caused by special powers and grow through their experiences.
      `,
    },
    {
      imageSrc: '/images/drawing/2.jpg',
      alt: 'Drawing of a girl holding a hairpin.',
      description: `
      Title: Dreaming with You

      Date Drawn: 2024/05/07

      Description:
      A romantic fantasy story following a boy cursed so that anyone who doesn’t see him for a certain period forgets his existence and a girl who keeps falling in love with him over and over again. Though the story is filled with sorrowful moments, it ultimately focuses on the protagonists finding their way, strengthening their hearts, and moving forward.`,
    },
    {
      imageSrc: '/images/drawing/3.jpg',
      alt: 'Drawing of a boy and a girl sitting on the rooftop.',
      description: `
      Title: Today, as if the Rain Flows

      Date Drawn: 2023/09/08

      Description:
      A fantasy coming-of-age story about a seemingly ordinary girl falsely accused as the perpetrator of a bullying incident that led to her best friend’s suffering. Just as she is about to make a tragic decision, she is saved by a gumiho boy with supernatural abilities. The boy takes her to a secret world that exists between 12:00 and 12:01 AM, a hidden one-hour dimension exclusive to gumiho. There, he tries to help her rediscover the meaning of life.
      `,
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
