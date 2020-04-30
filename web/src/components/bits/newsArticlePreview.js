import React from 'react'
import { Link } from 'react-router-dom';
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

const moment = require('moment');

export default function newsArticlePreview({ article, size }) {
  // console.log(size);

  return (
    <>
    { size === 'small' ? <div className="news-article-preview__line"/> : null}
    <div className={`news-article-preview ${size}`}>
      <Link to={`/news/${article.slug.current}`}>
          {
            article.mainImage ?
            <img src={imageUrlFor(buildImageObj(article.mainImage.image))
              .fit('crop')
              .url()}
            alt={article.title}
            /> : null
          }
          <div className="news-article-preview__text-wrapper">
            <span>{moment(article.date).format('DD.MM.YY')}</span>
            <div className="article-module__article-text">
              <h4>{article.title}</h4>
            </div>
          </div>
      </Link>

    </div>

    </>
  )
}
