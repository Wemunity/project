import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

const BlockContent = require('@sanity/block-content-to-react');

const Feature = ({ feature }) => {
  return (
    <div className="feature-module__feature">
      {feature.icon && feature.icon.asset && (
        <img
          className="feature-module__image"
          src={imageUrlFor(buildImageObj(feature.icon))
            .width(300)
            .url()}
          alt="feature icon"
        />
      )}
      <h4 className="feature-module__heading">
        {feature && feature.title && feature.title}
      </h4>
      <div className="feature-module__text">
        {feature && feature.text && <BlockContent blocks={feature.text} />}
      </div>
    </div>
  );
};

export default Feature;
