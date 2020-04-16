import React from 'react';
import coronaPattern from '../assets/corona_pattern.svg';
import smiley from '../assets/smiley.svg';
import FacebookLogo from '../assets/facebook.svg';
import InstagramLogo from '../assets/instagram.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import WemunityIcon from '../assets/wemunity-icon-light.svg';

const BlockContent = require('@sanity/block-content-to-react');

const Footer = ({ m }) => {
  return (
    <div className="module footer">
      <div className="footer__content">
        <div className="footer__column">
          <div className="footer__column-heading">
            <img className="footer__icon" style={{width:"30px"}} src={WemunityIcon} alt="Ø"/>
            <h4>{m && m.branding && m.branding}</h4>
          </div>
          {m && m.text && <BlockContent blocks={m.text} />}
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
          <a
            className="footer__link"
            href="mailto:contact@wemunity.org"
          >
            <div className="footer__contact-item">
              <img className="footer__icon" src={WemunityIcon} alt="Ø"/>
              <span>contact@wemunity.org</span>
            </div>
          </a>
          <a
            className="footer__link"
            href="https://www.facebook.com/wemunity/"
          >
            <div className="footer__contact-item">
              <img className="footer__icon" src={FacebookLogo} alt="Facebook logo"/>
              <span>Facebook</span>
            </div>
          </a>

          <a className="footer__link" href="https://www.linkedin.com/company/wemunity/">
            <div className="footer__contact-item">
              <img className="footer__icon" src={LinkedinLogo} alt="Linkedin logo"/>
              <span>Linkedin</span>
            </div>
          </a>
          <a className="footer__link" href="https://www.instagram.com/wemunity/">
            <div className="footer__contact-item">
              <img className="footer__icon" src={InstagramLogo} alt="Instagram logo"/>
              <span>Instagram</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
