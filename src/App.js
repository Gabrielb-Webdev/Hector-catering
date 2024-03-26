// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import ProductCarousel from './components/ProductCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Carousel />
        <AboutUs />
        <ProductCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
