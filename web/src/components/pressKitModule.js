import React from 'react';
import PageTitle from './bits/pageTitle';
import PressPhoto from './bits/pressPhoto'
import Button from '../components/bits/button'

export default function PressKitModule({ data }) {
  console.log(data)
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
