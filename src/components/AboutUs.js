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
          Somos una empresa con más de 14 años dedicados a ofrecer el mejor servicio para distintos eventos con un gran equipo de profesionales en todas las áreas que se requieren. 
          Tenemos distintas opciones en las que preparamos a las necesidades de nuestros clientes.
          Nuestra experiencia de trabajar en grandes restaurantes   en embajadas como la de Chile, Perú , Uruguay y sobre todo estar en este  hermoso país que es Argentina las cuales nos da la opción detener variedades de asados con las más finas carnes el gusto de cliente y sobre todo funcionando los bocaditos  y productos internacionales.
          No lo dude será una experiencia inolvidable para tu evento!
        </div>
        <div className="new-right-image">
          <img src={newRightImage} alt="Nueva imagen derecha" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
