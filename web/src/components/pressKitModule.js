import React from 'react';
import PressPhoto from './bits/pressPhoto'

export default function PressKitModule({ data }) {

  return (
    <div className="press-kit">
      <a
        className="button press-kit_button press-kit_all"
        href={``}
        download>
        <div className="button_content">
          <span>Download All</span>
        </div>
      </a>
      <div className="press-kit_container">
        {data.pressKitImages.map(image => <PressPhoto key={image._key} {...{image}} />)}
      </div>
    </div>
  )
}
