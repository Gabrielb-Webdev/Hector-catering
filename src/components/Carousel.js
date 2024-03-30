// src/components/Carousel.js

import React from 'react';
import bannerImage from '../img/catering.jpg'; // Ruta de la imagen del banner
import './Carousel.css'; // Importar estilos CSS del banner

function Carousel() {
  return (
    <div className="Banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      {/* Contenido opcional del banner */}
      <h1>¡Bienvenido a nuestro sitio web!</h1>
      <p>Descubre nuestras últimas ofertas.</p>
    </div>
  );
}

export default Carousel;
