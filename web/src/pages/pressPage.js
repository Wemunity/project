import React, { useState, useEffect } from 'react'
import client from '../lib/sanity';
import NavBar from '../components/navbar'
import PageTitle from '../components/bits/pageTitle'
import ArticleModule from '../components/articleModule'

export default function PressPage(props) {
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const query = `*[_type == "press"]`;

    client.fetch(query).then(data => {
      setModuleData(data[0]);
    });
  }, []);
  console.log(moduleData)
  return (
    <div className="pressPage">
      <NavBar {...props} theme="light" />
      {moduleData.length !== 0 &&
        <PageTitle
        title={moduleData._id.charAt(0).toUpperCase() + moduleData._id.slice(1)}
        subtitle={moduleData.abstract}
        />}
      <ArticleModule articles={moduleData.articles} />
    </div>
  )
}
