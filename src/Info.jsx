import React from 'react';

export default function Info() {
  return (
    <div className="info" id="contact-us">
      <div className="container container--pall">
        <div className="infoContainer">
          <div className="info__maps"></div>
          <div className="info__infos">
            <div className="info__title">Wo sie uns finden?</div>
            <div className="info__adress">
              <div className="info__adressIcon"></div>
              <div className="info__adressStreet">
                Musterstraße 23, 10777 Berlin
              </div>
            </div>
            <div className="info__opentime">
              <div className="info__opentimeIcon"></div>
              <div className="info__opentimeTime"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
