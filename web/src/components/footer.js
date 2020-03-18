import React from 'react';
import coronaPattern from '../assets/corona_pattern.svg';
import smiley from '../assets/smiley.svg';

const Footer = () => {
  return (
    <div className="module footer">
      <div className="footer__content">
        <div className="footer__column">
          <h4>Wemunity project</h4>
          <p>
            Wemunity is an open source project where we explore how immunized
            citizens can be utilized strategically in response to viral
            epidemics.
          </p>
        </div>
        <div className="footer__image">
          <img
            className="footer__corona"
            src={coronaPattern}
            alt="corona pattern"
          />
          <img className="footer__smiley" src={smiley} alt="smiley" />
        </div>
        <div className="footer__column">
          <h4>Contact</h4>
          <span>Anders Waage Nilsen</span>
          <span>anders@new.no</span>

          <h4>Social</h4>
          <a
            className="footer__link"
            href="https://www.facebook.com/groups/wemunity"
          >
            <span>Facebook</span>
          </a>
          <a className="footer__link" href="https://github.com/Wemunity">
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
