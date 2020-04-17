import React, { Fragment } from 'react';
import useSWR from "swr";
import client from '../lib/sanity';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import Footer from '../components/footer.js';
import NavBar from '../components/navbar.js';
import Grid from '../components/bits/grid.js';
import PageTitle from '../components/bits/pageTitle';

const BlockContent = require('@sanity/block-content-to-react');

const query = `
{
  "about": *[_type == "about"][0],
  "footerModule": *[_type == "footerModule"][0],
}`;

function About(props) {

  const { data, error } = useSWR(query, query =>
    client.fetch(query)
  )

  if (error) {
    return <div className="App">We're sorry, something wrong happened. <a href="mailto:contact@wemunity.org">Let us know about it.</a></div>
  }
  return (

    <div className="about">
      <Grid show={false}/>
      <NavBar {...props} theme="light" />

      <div className="about__wrapper">
        {
          /* Suspense can't come soon enough */
          data ? <Fragment>
          <PageTitle
            title={data.about.title}
            subtitle={data.about.abstract}
            />
          <div className={`about__main-image ${data.about.mainImage.position}`}>
            <img src={imageUrlFor(buildImageObj(data.about.mainImage.image)).url()}
            alt="cover"
            />
          </div>
          <div className="about__body">
            { data.about.body.map((value, key) => {
                if (value._type === 'block'){
                  return (
                    <div key={value._key} className="about__body-text">
                      <BlockContent blocks={value}/>
                    </div>
                  )
                }
                else if (value._type === 'contentImage'){
                  return (
                    <div key={value._key} className={`about__body-image ${value.position}`}>
                      <div className="about__body-image-wrapper">
                        <img src={imageUrlFor(buildImageObj(value.image)).url()} alt="content"/>
                        { value.caption ? <span>{value.caption}</span> : null }
                      </div>
                    </div>
                  )
                }
                else {
                  return null
                }

              })
            }
          </div>

          </Fragment> : <div className="App">Loading</div>
        }
      </div>
      {
        /* Suspense can't come soon enough */
        data ? <Fragment>
        <Footer m={data.footerModule} />
        </Fragment> : <div className="App">Loading</div>
      }
    </div>
  );
}

export default About;
