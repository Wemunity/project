import React, { useState, useEffect } from 'react';
import client from '../lib/sanity';
import PressPhoto from './bits/pressPhoto'

export default function PressKitModule({ data }) {
  const [pressImagesURL, setPressImagesURL] = useState([]);
  const [logosURL, setLogosURL] = useState([]);
  useEffect(() => {
    const query = `*[_type == "press"]
    {
      "URL": pressImagesFile.asset->url,
    }`;

    client.fetch(query).then(data => {
      setPressImagesURL(data[0].URL);
    });
  }, []);
  useEffect(() => {
    const query = `*[_type == "press"]
    {
      "URL": logoPack.asset->url,
    }`;

    client.fetch(query).then(data => {
      setLogosURL(data[0].URL);
    });
  }, []);
  return (
    <div className="press-kit">
      <a href={`${pressImagesURL}?dl=Wemunity Press Images.zip`} className="press-kit__link">Download Press Photos</a>
      <div className="press-kit__images">
        {data.pressImages.map((image,index) => <PressPhoto key={image._key} {...{index}} {...{image}} />)}
      </div>
      <div className="press-kit__container">
        <h2>Logo</h2>
        <a href={`${logosURL}?dl=Wemunity Logo Pack.zip`} className="press-kit__link">Download Logos (.svg + .png)</a>
        <div className="press-kit__logos">
          <PressPhoto key={data.logos[0]._key} index={"0logo"} image={data.logos[0]} />
          <div className="press-kit__logos-right">
            <PressPhoto key={data.logos[1]._key} index={"1logo"} image={data.logos[1]} />
            <PressPhoto key={data.logos[2]._key} index={"2logo"} image={data.logos[2]} />
          </div>
        </div>
      </div>
    </div>
  )
}
