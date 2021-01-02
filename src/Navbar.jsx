import React, { useState } from 'react';
import Logo from './images/makimaki.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const hamburgerClasses = open
    ? 'nav__toggle hide-for-desktop'
    : 'nav__toggle hide-for-desktop open';

  const hamburgerMenu = open
    ? 'nav__menu flex flex-jc-c'
    : 'nav__menu flex flex-jc-c open';

  return (
    <div className="nav">
      <nav className="container container--pt container--pr container--pl flex flex-jc-sb flex-ai-c">
        <div className="nav__logo">
          <a href="/">
            <img src={Logo} alt="makimaki" />
          </a>
        </div>

        <a onClick={() => setOpen(!open)} href="#" className={hamburgerClasses}>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="nav__links hide-for-mobile">
          <a href="#">MENÜ</a>
          <a href="#">KONTAKT</a>
          <button className="nav__cta" type="button">
            BESTELLEN
          </button>
        </div>
      </nav>
      <div className={hamburgerMenu}>
        <a href="#">Menü</a>
        <a href="#">Kontakt</a>
        <a href="#">Bestellen</a>
      </div>
    </div>
  );
}
