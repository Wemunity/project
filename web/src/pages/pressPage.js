import React, { useState, useEffect } from 'react'
import client from '../lib/sanity';
import NavBar from '../components/navbar'
import PageTitle from '../components/bits/pageTitle'
import ArticleModule from '../components/articleModule'
import PressKitModule from '../components/pressKitModule'
import Footer from '../components/footer';

export default function PressPage(props) {
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const query = `{
      "pressPage": *[_type == "press"],
      "footerModule": *[_type == "footerModule"],
    }`;

    client.fetch(query).then(data => {
      setModuleData(data);
    });
  }, []);
  const press = moduleData.length !== 0 && moduleData.pressPage[0]
  return (
    <div className="press-page">
      <NavBar {...props} theme="light" />
      {press &&
        <React.Fragment>
          <PageTitle
            title={press._id.charAt(0).toUpperCase() + press._id.slice(1)}
            subtitle={press.abstract}
            />
          <ArticleModule articles={press.articles} />
          <PageTitle subtitle={press.contact} />
          <PageTitle title={press.pressKitTitle} subtitle={press.pressKitDescription} blue={true} />
          <PressKitModule data={press} />
          <Footer m={moduleData.footerModule} />
        </React.Fragment>
      }
    </div>
  )
}
