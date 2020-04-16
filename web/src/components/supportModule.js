import React from 'react';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import PageTitle from './bits/pageTitle';
import Button from './bits/button';

const SupportModule = ({ m }) => {
  return (
    <div className="module support-module">
      <div className="support-module__wrapper">
        <div className="support-module__content">
          <PageTitle
            title={m && m.title && m.title}
            subtitle={m && m.abstract && m.abstract}
            />
          {/*
          <h1 className="support-module__title">
            {' '}
            {m && m.title && m.title}
          </h1>
          <div className="support-module__text">
            {m && m.text && <BlockContent blocks={m.text} />}
          </div>
          */}
          <div className="support-module__collaborators">
            {m &&
              m.supporters.map(s => (
                <img
                  key={s._key}
                  className="feature-module__image"
                  src={imageUrlFor(buildImageObj(s.logo))
                    .width(170)
                    .url()}
                  alt={s.title}
                />
              ))}
          </div>
          <div className="support-module__button-wrapper">
            <div className="support-module__button">
              <Button
                text={'Get involved'}
                link={'/partners'}
                arrow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModule;
