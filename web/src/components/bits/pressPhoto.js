import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

export default function PressPhoto({ image, index }) {
  // console.log(index)
  const imageURL = imageUrlFor(buildImageObj(image)).url()
  return (
    <div className={`press-kit__container press-kit__${index}`}>
      <img
        className={`press-kit__image`}
        src={imageURL}
        alt={image._key}/>
      {/*<a
        className="button press-kit__button"
        href={`${imageURL}?dl=`}
        download
        >
        <div className="button_content">
          <span>Download</span>
        </div>
      </a>*/}
    </div>
  )
}
