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
          Mobilize immunized citizens in dealing with the COVID-19 pandemic
        </h1>
        <p className="intro-module__text">
          We are building an open source system where the recovered can be
          approved to provide assistance in keeping up critical societal
          functions.
        </p>
      </div>
    </div>
  );
};

export default IntroModule;
