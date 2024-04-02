import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import "./ProductCarousel.css";
import ProductDetail from "./ProductDetail"; // Importa el componente ProductDetail
import { IMAGES } from "../data/data"; // Importa la constante IMAGES

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
  const [showDetail, setShowDetail] = useState(false); // Estado para controlar la visualización del detalle del producto

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

  useEffect(() => {
    setShowDetail(false); // Ocultar la información del producto al cambiar de producto
  }, [selectedProductIndex]);

  const toggleDetail = (idx) => {
    setSelectedProductIndex(idx); // Establecer el índice del producto seleccionado
    setShowDetail(!showDetail); // Cambia el estado para mostrar u ocultar la detalle del producto
  };

  return (
    <div>
      <div className="p-content">
        <div className="image-left" onClick={() => setSelectedProductIndex(imageIndex)}>
          <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
        </div>
        <h2 className="prod">Productos</h2>
        <div className="image-right" onClick={() => setSelectedProductIndex(imageIndex)}>
          <img className='bigote' src={rightImage} alt="Bigote derecho" />
        </div>
      </div>
      <Slider {...settings}>
        {IMAGES.map((image, idx) => (
          <div
            className={idx === imageIndex ? "activeSlide" : "slide"}
            key={image.id}
          >
            <div className="slideWrapper" onClick={() => setImageIndex(idx)}>
              <img src={image.src} alt={image.alt} />
            </div>
            {idx === imageIndex && (
              <div className="imageInfo">
                <h3>{image.title}</h3>
                <button className="bimageInfo" onClick={() => toggleDetail(idx)}>Ver más</button>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <ProductDetail showDetail={showDetail} selectedProductIndex={selectedProductIndex} />
    </div>
  );
};

export default ProductCarousel;
