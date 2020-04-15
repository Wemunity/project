import React from 'react';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import PageTitle from './bits/pageTitle';

const BlockContent = require('@sanity/block-content-to-react');

const SocialModule = ({ m }) => {
  return (
    <div className="module social-module">
      <div className="social-module__wrapper">
        <div className="social-module__content">
          <PageTitle
            title={m && m.title && m.title}
            subtitle={m && m.abstract && m.abstract}
            />
          {/*
          <h2 className="social-module__title">
            {m && m.title && m.title}
          </h2>
          <div className="social-module__text">
            {m && m.text && <BlockContent blocks={m.text} />}
          </div>
          */}
          <div className="social-module__buttons">
            <a
              href={m && m.buttonBlueUrl}
              className="social-module__button social-module__button--blue"
            >
              <span>{m && m.buttonBlueText}</span>
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href={m && m.buttonGreyUrl}
              className="social-module__button social-module__button--grey"
            >
              <span>{m && m.buttonGreyText}</span>
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModule;
