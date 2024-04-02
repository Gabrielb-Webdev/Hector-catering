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

  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Detener el comportamiento predeterminado del navegador
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Obtener la altura de la barra de navegación
      const offset = navbarHeight + -15; // Ajustar el offset para desplazarse un poco más bajo
      const sectionPosition = section.offsetTop - offset; // Calcular la posición de desplazamiento
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' }); // Desplazarse a la posición calculada suavemente
    }
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
        <a href="#inicio"> {/* Agregar href="#inicio" para ir al inicio */}
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
          <li><a href="#inicio" onClick={(event) => scrollToSection('inicio', event)}>Inicio</a></li> {/* Agregar href="#inicio" para ir al inicio */}
          <li>
            <a href="#productos" onClick={(event) => scrollToSection('productos', event)}>Productos</a>
          </li>
          <li><a href="#contacto" onClick={(event) => scrollToSection('contacto', event)}>Contacto</a></li> {/* Agregar href="#contacto" para ir a ContactForm */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
