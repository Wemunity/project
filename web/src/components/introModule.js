import React from 'react';
import coronaPattern from '../assets/corona_pattern.svg';
import Button from './bits/button';


const BlockContent = require('@sanity/block-content-to-react');

const IntroModule = ({ m }) => {
  return (
    <div className="module intro-module">
      <div className="intro-module__image">
        <img src={coronaPattern} alt="corona pattern" />
      </div>
      <div className="intro-module__content">
        <span className="intro-module__logo">
          {m && m.branding && m.branding}
        </span>
        <h1 className="intro-module__title">{m && m.title && m.title}</h1>
        <div className="intro-module__text">
          {m && m.text && <BlockContent blocks={m.text} />}
        </div>
        <Button text={'Sign up'} light={false} link={'/signup'}/>
      </div>
    </div>
  );
};

export default IntroModule;
