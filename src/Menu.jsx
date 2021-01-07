import './scss/style.css';
import React from 'react';

import Navbar from './Navbar';
import Speisekarte from './Speisekarte';
import Footer from './Footer';

export default function Menu() {
  return (
    <div>
      <Navbar />
      <Speisekarte />
      <Footer />
    </div>
  );
}
