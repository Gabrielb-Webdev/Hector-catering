import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import leftImage from '../img/Bigote-izquierdo.png';
import rightImage from '../img/Bigote_derecho.png';
import newLeftImage from '../img/Tenedor.png';
import newRightImage from '../img/Cuchillo.png';

const ProductDetail = ({ product, onClose }) => {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // Cuando el componente se monta, esperamos un corto tiempo antes de mostrarlo
    const timeout = setTimeout(() => {
      setShowDetail(true);
    }, 100);

    // Limpieza del timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`product-detail-container ${showDetail ? "show-product-detail" : ""}`}>
      {/* Botón de cierre */}
      <button className="close-button" onClick={onClose}>X</button>

      <div className="product-detail-left">
        <div className="product-title-container">
          <img className="product-title-left" src={newLeftImage} alt="Tenedor" />
          <h2>{product.title}</h2>
          <img className="product-title-right" src={newRightImage} alt="Cuchillo" />
        </div>
        <img className="product-image" src={product.src} alt={product.alt} />
      </div>
      <div className="product-detail-right">
        <div className="p-content">
          <div className="image-left">
            <img className='bigote' src={leftImage} alt="Bigote izquierdo" />
          </div>
          <h2>Descripción</h2>
          <div className="image-right">
            <img className='bigote' src={rightImage} alt="Bigote derecho" />
          </div>
        </div>
        {/* Mapea el array descripcion_producto y renderiza cada párrafo dentro de un elemento <p> */}
        {product.descripcion_producto.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <button className="bimageInfo-p bimageInfo">Botón adicional</button>
      </div>
    </div>
  );
};

export default ProductDetail;
