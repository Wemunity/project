import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

export default function PressPhoto({ image }) {
  return (
    <div className="press-kit_container">
      <img
        className="press-kit_image"
        src={imageUrlFor(buildImageObj(image)).url()}
        atl={image._key}/>
      <a
        className="button press-kit_button"
        href={`${image.asset._ref}`}
        download>
        <div className="button_content">
          <span>Download</span>
        </div>
      </a>
    </div>
  )
}
