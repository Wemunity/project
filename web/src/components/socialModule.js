import React from 'react';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import PageTitle from './bits/pageTitle';

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
            { m.buttons.map((value, key) => {
                if (value.color === 'dark'){
                  return (
                    <a
                      key={value._key}
                      href={value && value.url}
                      className="social-module__button social-module__button--blue"
                    >
                      <span>{value && value.label}</span>
                      <img src={imageUrlFor(buildImageObj(value && value.icon)).url()}
                      alt="icon"
                      />
                    </a>
                  )
                }
                else if (value.color === 'light'){
                  return (
                    <a
                      key={value._key} 
                      href={value && value.url}
                      className="social-module__button social-module__button--grey"
                    >
                      <span>{value && value.label}</span>
                      <img src={imageUrlFor(buildImageObj(value && value.icon)).url()}
                      alt="icon"
                      />
                    </a>
                  )
                }
                else {
                  return null
                }

              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModule;
