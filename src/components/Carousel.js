// src/components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Importa el archivo CSS para los estilos personalizados

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Desactiva las flechas de navegación
    autoplay: true, // Activa la reproducción automática
    autoplaySpeed: 5000 // Establece el intervalo de tiempo en milisegundos (5 segundos)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="images/large_image2.png" alt="Imagen 1" />
        </div>
        <div>
          <img src="images/large_image2.png" alt="Imagen 2" />
        </div>
        <div>
          <img src="images/large_image2.png" alt="Imagen 3" />
        </div>
        {/* Agrega más elementos div con imágenes según sea necesario */}
      </Slider>
    </div>
  );
}

export default Carousel;
