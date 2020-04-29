import React from 'react'
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

const moment = require('moment');

export default function Article({ article }) {
  return (
    <div className="article-module__article">
      {
        article.mainImage ?
        <img src={imageUrlFor(buildImageObj(article.mainImage.image)).url()}
        alt={article.title}
        /> : null
      }


      <span>{moment(article.date).format('DD.MM.YY')}</span>
      <div className="article-module__article-text">
        <h4>{article.title}</h4>
      </div>
    </div>
  )
}
