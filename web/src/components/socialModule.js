import React from 'react';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';

const BlockContent = require('@sanity/block-content-to-react');

const SocialModule = ({ m }) => {
  return (
    <div className="module social-module">
      <div className="social-module__content">
        <h2 className="social-module__title">
          {m && m[0].title && m[0].title}
        </h2>
        <div className="social-module__text">
          {m && m[0].text && <BlockContent blocks={m[0].text} />}
        </div>
        <div className="social-module__main">
          <iframe height="450px" className="social-module__iframe" title="Spleis" src="https://www.spleis.no/project/101957/embed" frameBorder="0"></iframe>
          <div className="social-module__buttons">

            <a
              href={m && m[0].buttonBlueUrl}
              className="social-module__button social-module__button--blue"
            >
              <span>{m && m[0].buttonBlueText}</span>
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href={m && m[0].buttonGreyUrl}
              className="social-module__button social-module__button--grey"
            >
              <span>{m && m[0].buttonGreyText}</span>
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModule;
