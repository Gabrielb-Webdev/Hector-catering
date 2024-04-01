// src/components/NavBar.js

import React from 'react';
import logo from '../img/LOGO.png'; // Importar la imagen
import './NavBar.css'; // Importar estilos CSS

function NavBar() {
  return (
    <nav className="navbar">
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
      </>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
