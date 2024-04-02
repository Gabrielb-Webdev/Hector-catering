// src/components/ProductDetail.js

import React from "react";
import "./ProductDetail.css";
import { IMAGES } from "../data/data"; // Importa la constante IMAGES

const ProductDetail = ({ showDetail, selectedProductIndex }) => {
  return (
    <div className={`ProductDetail ${showDetail ? "open" : ""}`}>
      {showDetail && (
        <div>
          <h3>{IMAGES[selectedProductIndex].title}</h3>
          <p>{IMAGES[selectedProductIndex].description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
