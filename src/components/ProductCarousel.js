// src/components/ProductCarousel.js

import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import "./ProductCarousel.css";
import { IMAGES } from "../data/data";
import Modal from 'react-modal'; // Importa react-modal
import ProductDetail from './ProductDetail'; // Importa el componente ProductDetail

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

const ProductCarousel = ({ slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const toggleDetail = (idx) => {
    setSelectedProductIndex(idx);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <div className="p-content">
        <div className="image-left" onClick={() => setImageIndex(imageIndex - 1)}>
          <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
        </div>
        <h2 className="prod">Eventos</h2>
        <div className="image-right" onClick={() => setImageIndex(imageIndex + 1)}>
          <img className='bigote' src={rightImage} alt="Bigote derecho" />
        </div>
      </div>
      <Slider {...settings}>
        {IMAGES.map((image, idx) => (
          <div
            className={idx === imageIndex ? "activeSlide" : "slide"}
            key={image.id}
          >
            <div className="slideWrapper">
              <img src={image.src} alt={image.alt} />
              <div className="imageInfo">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
              {idx === imageIndex && (
                <div className="verMasButtonContainer">
                  <button className="bimageInfo verMasButton" onClick={() => toggleDetail(idx)}>Ver más</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={showDetail}
        onRequestClose={handleCloseDetail}
        contentLabel="Producto Detail"
      >
        <ProductDetail
          product={IMAGES[selectedProductIndex]}
          onClose={handleCloseDetail}
        />
      </Modal>
    </div>
  );
};

export default ProductCarousel;
