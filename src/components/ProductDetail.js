// ProductDetail.js
import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { IMAGES } from "../data/data"; // Importa la constante IMAGES

const ProductDetail = ({ showDetail, selectedProductIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(showDetail);
  }, [showDetail, selectedProductIndex]); // Agrega selectedProductIndex como dependencia

  return (
    <div className={`ProductDetail ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className={`ProductDetail-content ${isOpen ? "open" : ""}`}>
          <h3>{IMAGES[selectedProductIndex].title}</h3>
          <p>{IMAGES[selectedProductIndex].description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
