// src/components/AboutUs.js

import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './AboutUs.css';
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import newLeftImage from '../img/Tenedor.png';
import newRightImage from '../img/Cuchillo.png';

function AboutUs() {
  const lorem = new LoremIpsum();

  return (
    <section className="about">
      <div className="about-content">
        <div className="image-left">
          <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
        </div>
        <h2 className="about-heading">¿Quiénes somos?</h2>
        <div className="image-right">
          <img className='bigote' src={rightImage} alt="Bigote derecho" />
        </div>
      </div>
      <div className="paragraph-container">
        <div className="new-left-image">
          <img src={newLeftImage} alt="Nueva imagen izquierda" />
        </div>
        <div className="paragraph">
          <p>{lorem.generateParagraphs(1)}</p>
        </div>
        <div className="new-right-image">
          <img src={newRightImage} alt="Nueva imagen derecha" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
