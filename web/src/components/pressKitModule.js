import React, { useState, useEffect } from 'react';
import client from '../lib/sanity';
import PressPhoto from './bits/pressPhoto'

export default function PressKitModule({ data }) {
  const [pressKitURL, setPressKitURL] = useState([]);
  useEffect(() => {
    const query = `*[_type == "press"]
    {
      "URL": fullPressKit.asset->url,
    }`;

    client.fetch(query).then(data => {
      setPressKitURL(data[0].URL);
    });
  }, []);
  return (
    <div className="press-kit">
      <a href={`${pressKitURL}?dl=Wemunity Press Kit.zip`} className="press-kit__link">Download Press Kit</a>
      <div className="press-kit__images">
        {data.pressKitImages.map((image,index) => <PressPhoto key={image._key} {...{index}} {...{image}} />)}
      </div>
      <div className="press-kit__container">
        <h2>Logo</h2>
        <div className="press-kit__logos">
          <PressPhoto key={data.logoImages[0]._key} index={"0logo"} image={data.logoImages[0]} />
          <div className="press-kit__logos-right">
            <PressPhoto key={data.logoImages[1]._key} index={"1logo"} image={data.logoImages[1]} />
            <PressPhoto key={data.logoImages[2]._key} index={"2logo"} image={data.logoImages[2]} />
          </div>
        </div>
      </div>
    </div>
  )
}
