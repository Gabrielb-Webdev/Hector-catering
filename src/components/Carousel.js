import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Importa tus estilos CSS para el carrusel

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 1" className="carousel-image" />
      </div>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 2" className="carousel-image" />
      </div>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 3" className="carousel-image" />
      </div>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 4" className="carousel-image" />
      </div>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 5" className="carousel-image" />
      </div>
      <div>
        <img src="../images/large_image2.png" alt="Imagen 6" className="carousel-image" />
      </div>
    </Slider>
  );
}
