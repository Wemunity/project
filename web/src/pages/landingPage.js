import React, { Fragment } from 'react';
import useSWR from "swr";
import client from '../lib/sanity';
import IntroModule from '../components/introModule.js';
import '../styles/app.scss';
import SocialModule from '../components/socialModule.js';
import FeatureModule from '../components/featureModule.js';
import SupportModule from '../components/supportModule.js';
import NewsModule from '../components/newsModule.js';
import Footer from '../components/footer.js';
import NavBar from '../components/navbar.js';

const query = `
{
  "introModule": *[_type == "introModule"][0],
  "featureModule": *[_type == "featureModule"][0],
  "socialModule": *[_type == "socialModule"][0],
  "supportModule": *[_type == "supportModule"][0],
  "footerModule": *[_type == "footerModule"][0],
  "news": *[_type == "news"],
}`;

function LandingPage(props) {

  const { data: moduleData, error } = useSWR(query, query =>
    client.fetch(query)
  )

  if (error) {
    return <div className="App">We're sorry, something wrong happened. <a href="mailto:contact@wemunity.org">Let us know about it.</a></div>
  }

  return (
    <div className="App">
      <NavBar {...props} theme="dark" />
      {
        /* Suspense can't come soon enough */
        moduleData ? <Fragment>
        <IntroModule m={moduleData.introModule} />
        <NewsModule m={moduleData.news} />
        <SocialModule m={moduleData.socialModule} />
        <FeatureModule m={moduleData.featureModule} />
        <SupportModule m={moduleData.supportModule} />
        <Footer m={moduleData.footerModule} />
        </Fragment> : <div className="App">Loading</div>
      }
    </div>
  );
}

export default LandingPage;
