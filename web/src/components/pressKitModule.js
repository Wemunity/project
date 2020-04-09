import React from 'react';
import PageTitle from './bits/pageTitle';
import PressPhoto from './bits/pressPhoto'
import Button from '../components/bits/button'

export default function PressKitModule({ data }) {
  console.log(data)
  return (
    <div className="press-kit">
      {data.pressKitImages.map(image => <PressPhoto key={image._key} {...{image}} />)}
    </div>
  )
}
