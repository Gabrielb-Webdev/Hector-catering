// src/components/Footer.js

import React from 'react';
import LogoW from '../img/whats-app.png';
import LogoC from '../img/Mail.png';
import LogoP from '../img/LOGO.png';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <div>
          <img className='WL' src={LogoW} alt="WhatsApp Logo" />
          <p>WhatsApp: XXX-XXX-XXX</p>
        </div>
        <div>
          <img src={LogoC} alt="Email Logo" />
          <p>Email: info@hectorcatering.com</p>
        </div>
      </div>
      <div className="logo">
        <img src={LogoP} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer;
