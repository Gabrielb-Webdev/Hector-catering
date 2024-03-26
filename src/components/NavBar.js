// src/components/NavBar.js

import React from 'react';
import logo from '../img/LOGO.png'; // Importar la imagen
import './NavBar.css'; // Importar estilos CSS

function NavBar() {
  return (
    <nav className="navbar">
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
