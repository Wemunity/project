import React from 'react';

import coronaPattern from '../assets/corona_pattern.svg';
import WemunityLogoLight from '../assets/wemunity-logo-light.svg'

import Button from './bits/button';
import Grid from './bits/grid';
import PageTitle from './bits/pageTitle';



const BlockContent = require('@sanity/block-content-to-react');

const IntroModule = ({ m }) => {
  return (
    <div className="module intro-module">
      <div className="intro-module__wrapper">
        <Grid show={false}/>
        <div className="intro-module__image">
          <img src={coronaPattern} alt="corona pattern" />
        </div>
        <div className="intro-module__content">
          <div className="intro-module__logo">
            <img src={WemunityLogoLight} alt="Wemunity logo"/>
          </div>
          {/*<span className="intro-module__logo">
            {m && m.branding && m.branding}
          </span>
          */}
          <PageTitle
            title={m && m.title && m.title}
            subtitle={m && m.abstract && m.abstract}
            />
          {/* <h1 className="intro-module__title">{m && m.title && m.title}</h1>
          <div className="intro-module__text">
            {m && m.text && <BlockContent blocks={m.text} />}
          </div>*/}

        </div>
      </div>
    </div>
  );
};

export default IntroModule;
