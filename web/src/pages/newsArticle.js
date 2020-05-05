import React, { Fragment, useEffect } from 'react';
import {Helmet} from "react-helmet";
import useSWR from "swr";
import client from '../lib/sanity';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import Footer from '../components/footer.js';
import NavBar from '../components/navbar.js';
import Grid from '../components/bits/grid.js';
import PageTitle from '../components/bits/pageTitle';

const BlockContent = require('@sanity/block-content-to-react');


// async function getArticle(slug) {
//
//   const query = `{
//     "article": *[_type == "news" && slug.current == $slug][0],
//     "footerModule": *[_type == "footerModule"][0]
//   }`;
//
//   const params = {slug: slug};
//   const { data, error } = await useSWR(query, query =>
//     client.fetch(query, params),
//   )
//     .then(promise => {
//       return promise.data;
//     })
//     .catch(e => {
//       console.error(e);
//     })
//     return data;
// }

const NewsArticle = (props) => {

  // const [data, setData] = useState(null);

  useEffect(() => {
    if (window){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [])

  const { params: { slug } } = props.match;
  const query = `{
    "article": *[_type == "news" && slug.current == $slug][0],
    "footerModule": *[_type == "footerModule"][0]
  }`;

  const params = {slug: slug};
  const { data, error } = useSWR(query, query =>
    client.fetch(query, params),
    { dedupingInterval: 100 }
  )

  if (error) {
    return <div className="App">We're sorry, something wrong happened. <a href="mailto:contact@wemunity.org">Let us know about it.</a></div>
  }

  // <Helmet>
  //   <meta name="title" content={data.article.title} />
  //   <meta property="og:title" content={data.article.title} />
  //   <meta name="description" content={data.article.abstract} />
  //   <meta property="og:description" content={data.article.abstract} />
  //   <meta name="image" content={imageUrlFor(buildImageObj(data.article.mainImage.image)).url()} />
  //   <meta property="og:image" content={imageUrlFor(buildImageObj(data.article.mainImage.image)).url()} />
  // </Helmet>
  return (
    <div className="about">
      {
        data ?
        <Helmet>
          <title>{data && data.article.title && data.article.title} - Wemunity</title>
        </Helmet> : null
      }
      <Grid show={false}/>
      <NavBar {...props} theme="light" />

      <div className="about__wrapper">
        {
          data ? <Fragment>
          <PageTitle
            title={data.article.title && data.article.title}
            subtitle={data.article.abstract && data.article.abstract}
            />
          <div className={`about__main-image ${data.article.mainImage.position && data.article.mainImage.position}`}>
            <img src={imageUrlFor(buildImageObj(data.article.mainImage.image && data.article.mainImage.image)).url()}
            alt="cover"
            />
          </div>
          <div className="about__body">
            { data.article.body && data.article.body.map((value, key) => {
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
        data && data.footerModule && <Fragment>
        <Footer m={data.footerModule} />
        </Fragment>
      }
    </div>
  );
}

export default NewsArticle;
