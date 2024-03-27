// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import ProductCarousel from './components/ProductCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { IMAGES } from './data/data';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="app-container">
          <div className="container">
            <Carousel images={IMAGES} slidesToShow={5} />
          </div>
        </div>
        <AboutUs />
        <ProductCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
