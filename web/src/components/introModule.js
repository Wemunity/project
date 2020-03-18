import React from 'react';
import coronaPattern from '../assets/corona_pattern.svg';

const IntroModule = () => {
  return (
    <div className="module intro-module">
      <div className="intro-module__image">
        <img src={coronaPattern} alt="corona pattern" />
      </div>
      <div className="intro-module__content">
        <span className="intro-module__logo">Wemunity project</span>
        <h1 className="intro-module__title">
          Mobilize immunized citizens to contribute in dealing with Covid-19
          pandemi
        </h1>
        <p className="intro-module__text">
          Building a service where recovered patients can registered, be
          medically cleared and made available to provide assistance to keep up
          critical societal functions.
        </p>
      </div>
    </div>
  );
};

export default IntroModule;
