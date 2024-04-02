// src/components/ProductCarousel.js

import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import "./ProductCarousel.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="p-content">
        <div className="image-left">
            <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
          </div>
        <h2 className="prod">Productos</h2>
        <div className="image-right">
            <img className='bigote' src={rightImage} alt="Bigote derecho" />
          </div>
        </div>
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div
            className={idx === imageIndex ? "activeSlide" : "slide"}
            key={image.id}
          >
            <div className="slideWrapper">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="imageInfo">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
