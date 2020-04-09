import React, { useState, useEffect } from 'react'
import client from '../lib/sanity';
import NavBar from '../components/navbar'
import PageTitle from '../components/bits/pageTitle'
import ArticleModule from '../components/articleModule'
import PressKitModule from '../components/pressKitModule'
import Footer from '../components/footer';

export default function PressPage(props) {
  const [moduleData, setModuleData] = useState([]);
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    const query = `*[_type == "press"]`;
    const footerQuery = `*[_type == "footerModule"]`;

    client.fetch(query).then(data => {
      setModuleData(data[0]);
    });
    client.fetch(footerQuery).then(data => {
      setFooterData(data);
    });
  }, []);
  console.log(moduleData, footerData)
  return (
    <div className="pressPage">
      <NavBar {...props} theme="light" />
      {moduleData.length !== 0 &&
        <PageTitle
        title={moduleData._id.charAt(0).toUpperCase() + moduleData._id.slice(1)}
        subtitle={moduleData.abstract}
        />}
      <ArticleModule articles={moduleData.articles} />
      <PressKitModule data={moduleData} />
      {footerData.length !== 0 &&
        <Footer m={footerData} />}
    </div>
  )
}
