import React, { Fragment } from 'react';
import useSWR from "swr";
import client from '../lib/sanity';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import Footer from '../components/footer.js';
import NavBar from '../components/navbar.js';
import Grid from '../components/bits/grid.js';
import PageTitle from '../components/bits/pageTitle';

const query = `
{
  "partners": *[_type == "partners"][0],
  "footerModule": *[_type == "footerModule"][0],
  "supportModule": *[_type == "supportModule"][0],
}`;

function Partners(props) {

  const { data, error } = useSWR(query, query =>
    client.fetch(query)
  )

  if (error) {
    return <div className="App">We're sorry, something wrong happened. <a href="mailto:contact@wemunity.org">Let us know about it.</a></div>
  }

  return (

    <div className="partners">

      <Grid show={false}/>
      <NavBar {...props} theme="dark" />

        {
          /* Suspense can't come soon enough */
          data ? <Fragment>
          <div className="partners__wrapper">
            <PageTitle
              title={data.partners.title}
              subtitle={data.partners.abstract}
              />
              <div className="partners__buttons">
                {
                  data.partners.buttonLinks.map((value) => {
                    return (
                      <div key={value._key} className="partners__button">
                        <a className="button" href={value.url}>
                          <div className="button__content">
                            <span>{value.label}</span>
                          </div>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
          </div>
          <div className="partners__support-module">
            <div className="partners__support-module__wrapper">
              <PageTitle
                title={'Partners and support'}
                />
              <div className="partners__support-module__collaborators">
                {
                  data.supportModule.supporters.map(s => (
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
            </div>
          </div>
          <div className="partners__donations">
            <div className="partners__wrapper">
              <div className="partners__business-donations">
                <div className="partners__donations-title"><span>Business Donations</span></div>
                <div className="partners__donations-list">
                  {
                    data.partners.businessDonations.map((value, key) => {
                      return <div key={key} className="partners__donations-name"><span>{value}</span></div>
                    })
                  }
                </div>
              </div>
              <div className="partners__individual-donations">
                <div className="partners__donations-title"><span>Individual Donations</span></div>
                <div className="partners__donations-list">
                  {
                    data.partners.individualDonations.map((value, key) => {
                      return <div key={key} className="partners__donations-name"><span>{value}</span></div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          </Fragment> : <div className="App">Loading</div>
        }
      {
        /* Suspense can't come soon enough */
        data ? <Fragment>
        <Footer m={data.footerModule} />
        </Fragment> : <div className="App">Loading</div>
      }
    </div>
  );
}

export default Partners;
