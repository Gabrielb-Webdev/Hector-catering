// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import './Carousel.css';
import foto400 from '../img/Foto400.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Índice inicial para la imagen del medio

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar al siguiente índice
      setCurrentIndex(currentIndex => (currentIndex + 1) % 5);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="carousel-container">
      {[0, 1, 2, 3, 4].map(index => (
        <img
          key={index}
          src={foto400}
          alt="Foto"
          className={`carousel-image ${index === currentIndex ? 'center-image' : ''}`}
        />
      ))}
    </div>
  );
}

export default Carousel;
