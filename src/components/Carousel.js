// src/components/Carousel.js

import React from 'react';
import './Carousel.css'; // Importar estilos CSS
import foto400 from '../img/Foto400.png'; // Importar la imagen

function Carousel() {
  return (
    <div className="carousel-container">
      {/* Replicar la imagen cinco veces */}
      <img src={foto400} alt="Foto" className="carousel-image" />
      <img src={foto400} alt="Foto" className="carousel-image" />
      <img src={foto400} alt="Foto" className="carousel-image" />
      <img src={foto400} alt="Foto" className="carousel-image" />
      <img src={foto400} alt="Foto" className="carousel-image" />
    </div>
  );
}

export default Carousel;
