import './scss/style.css';
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Info from './Info';
import BuyNow from './BuyNow';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Info />
      <BuyNow />
      <Footer />
    </div>
  );
}

export default LandingPage;
