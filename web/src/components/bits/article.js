import React from 'react'
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

import ReadMoreArrow from '../../assets/read-more-arrow.svg';

const moment = require('moment');

export default function Article({ article }) {
  console.log(moment(article.releaseDate).format('DD.MM.YY'));
  return (
    <div className="article-module__article">
      <img src={imageUrlFor(buildImageObj(article.image)).url()}
      alt={article.title}
      />
      <span>Published: {moment(article.releaseDate).format('DD.MM.YY')} - {article.source}</span>
      <h4>{article.title}</h4>

      <div className="article-module__article-read-more">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
          <img src={ReadMoreArrow} alt="->"/>
        </a>
      </div>
    </div>
  )
}
