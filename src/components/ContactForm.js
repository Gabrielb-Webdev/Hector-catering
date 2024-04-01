// src/components/ContactForm.js

import React from 'react';
import './ContactForm.css';
import contactImage from '../img/Bandeja-contacto.png'; // Asegúrate de importar tu imagen correctamente

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="left-column">
        <div>
          <h2>¡Contáctanos!</h2>
          <p>¿Cómo podemos ayudarte?</p>
        </div>
        <img src={contactImage} alt="Contact" />
      </div>
      <div className="right-column">
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" />
          </div>
          <div className="form-group">
            <label htmlFor="consulta">¡Déjanos tu consulta!</label>
            <textarea id="consulta"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
