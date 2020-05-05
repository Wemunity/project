import React from 'react'
import client from '../lib/sanity';
import useSWR from "swr";
import {Helmet} from "react-helmet";
import NavBar from '../components/navbar'
import PageTitle from '../components/bits/pageTitle'
import NewsArticles from '../components/newsArticles'
import Footer from '../components/footer';
import Grid from '../components/bits/grid.js';

const query = `{
  "news": *[_type == "news"],
  "footerModule": *[_type == "footerModule"][0],
}`;

export default function News(props) {
  const { data, error } = useSWR(query, query =>
    client.fetch(query)
  )

  if (error) {
    return <div className="App">We're sorry, something wrong happened. <a href="mailto:contact@wemunity.org">Let us know about it.</a></div>
  }
  // console.log(data);

  return (
    <div className="press">
      <Helmet>
        <title>News - Wemunity</title>
      </Helmet>
      <Grid show={false}/>
      <NavBar {...props} theme="light" />
      <div className="press__wrapper">
        {data ?
          <React.Fragment>
            <PageTitle
              title={'News'}
              subtitle={''}
              />
            <NewsArticles articles={data.news.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
              })} />
          </React.Fragment> : <div className="App">Loading</div>
        }
      </div>
      {
        data ? <React.Fragment>
        <Footer m={data.footerModule} />
        </React.Fragment> : <div className="App">Loading</div>
      }
    </div>
  )
}
