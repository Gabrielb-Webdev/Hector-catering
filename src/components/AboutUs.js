// src/components/AboutUs.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import newLeftImage from '../img/Tenedor.png';
import newRightImage from '../img/Cuchillo.png';

function AboutUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/consulta.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

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
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="new-right-image">
          <img src={newRightImage} alt="Nueva imagen derecha" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
