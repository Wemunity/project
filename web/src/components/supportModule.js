import React from 'react';

import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

const BlockContent = require('@sanity/block-content-to-react');

const SupportModule = ({ m }) => {
  return (
    <div className="module support-module">
      <div className="support-module__content">
        <h1 className="support-module__title">
          {' '}
          {m && m[0].title && m[0].title}
        </h1>
        <div className="support-module__text">
          {m && m[0].text && <BlockContent blocks={m[0].text} />}
        </div>
        <div className="support-module__collaborators">
          {m &&
            m[0].supporters.map(s => (
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
        <span className="support-module__email">
          Email <a href="mailto:anders@new.no">anders@new.no</a> if you want to
          take part
        </span>
      </div>
    </div>
  );
};

export default SupportModule;
