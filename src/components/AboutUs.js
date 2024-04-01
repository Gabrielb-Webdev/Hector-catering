// src/components/AboutUs.js

import React from 'react';
import { LoremIpsum } from 'lorem-ipsum'; // Importar LoremIpsum directamente
import './AboutUs.css'; // Importar estilos CSS

function AboutUs() {
  const lorem = new LoremIpsum();

  return (
    <section className="about">
      <div className="about-content">
        <h2>¿Quiénes somos?</h2>
        <p>{lorem.generateParagraphs(1)}</p>
      </div>
    </section>
  );
}

export default AboutUs;

