import React from "react";
import "./ProductDetail.css";
import newLeftImage from '../img/Tenedor.png';
import newRightImage from '../img/Cuchillo.png';

const ProductDetail = ({ product, onClose }) => {
  return (
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
        <h4>Otro subtítulo si es necesario</h4>
        <h3>{product.description}</h3>
        <button className="bimageInfo">Botón adicional</button>
      </div>
    </div>
  );
};

export default ProductDetail;
