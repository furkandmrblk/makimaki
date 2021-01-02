import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__logo">MAKIMAKI</div>
        <div className="footer__copyright">MakiMaki © 2020</div>
        <div className="footer__link1">
          <div className="footer__link1-1">Navigation</div>
          <div className="footer__link1-2">Home</div>
          <div className="footer__link1-3">About Us</div>
        </div>
        <div className="footer__link2">
          <div className="footer__link2-1">Navigation</div>
          <div className="footer__link2-2">Home</div>
          <div className="footer__link2-3">About Us</div>
        </div>
        <div className="footer__link3">
          <div className="footer__link3-1">Navigation</div>
          <div className="footer__link3-2">Home</div>
          <div className="footer__link3-3">About Us</div>
        </div>
        <div className="footer__buttons">
          <button className="footer__buttons-1">Anrufen</button>
          <button className="footer__buttons-2">Bestellen</button>
        </div>
      </div>
    </div>
  );
}
