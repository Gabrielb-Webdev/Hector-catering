// src/components/ProductDetail.js

import React from "react";
import "./ProductDetail.css";
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import newLeftImage from '../img/Tenedor.png';
import newRightImage from '../img/Cuchillo.png';

const ProductDetail = ({ product, onClose }) => {
  return (
    <div>
      {/* Botón de cierre */}
      <button className="close-button" onClick={onClose}>X</button>

      <div className="product-detail-container">
        <div className="product-detail-left">
          <div className="product-title-container">
            <img className="product-title-left" src={newLeftImage} alt="Tenedor" />
            <h2>{product.title}</h2>
            <img className="product-title-right" src={newRightImage} alt="Cuchillo" />
          </div>
          <img className="product-image" src={product.src} alt={product.alt} />
          <h3>{product.description}</h3>
          <button className="bimageInfo">Botón adicional</button>
        </div>
        <div className="product-detail-right">
          <div className="p-content">
            <div className="image-left">
              <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
            </div>
            <h2>Contiene</h2>
            <div className="image-right">
              <img className='bigote' src={rightImage} alt="Bigote derecho" />
          </div>
        </div>
          <h3>{product.description}</h3>
          <button className="bimageInfo">Botón adicional</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
