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
          <p>WhatsApp: +54 9 11-3032-0938</p>
        </div>
        <div>
          <img className='EL' src={LogoC} alt="Email Logo" />
          <p className='PF'>Email: legout.eventos.catering@gmail.com</p>
        </div>
      </div>
      <div className="logo">
        <img src={LogoP} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer;
