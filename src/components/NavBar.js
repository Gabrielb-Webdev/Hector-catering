// src/components/NavBar.js

import React, { useState } from 'react';
import logo from '../img/LOGO.png'; // Importar la imagen
import './NavBar.css'; // Importar estilos CSS

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('.navbar').classList.toggle('menu-open');
    document.querySelector('.navbar-right ul').classList.toggle('show'); // Agregar o quitar la clase 'show'
  };

  return (
    <nav className="navbar">
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
      </>
      <div className="navbar-left">
        {/* Envolver el logo con un enlace */}
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        {/* Botón de hamburguesa */}
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Menú de navegación */}
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
