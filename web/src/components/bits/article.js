import React from 'react'
import { buildImageObj } from '../../lib/helpers';
import imageUrlFor from '../../lib/image-url';

export default function Article({ index, article }) {
  return (
    <div className="article-module__article">
      <img src={imageUrlFor(buildImageObj(article.image)).url()}
      alt={article.title}
      />
      <h4>{article.title}</h4>
      <span>{article.releaseDate} - {article.source}</span>
      <a href={article.url} target="_blank">
        Read more
      </a>
    </div>
  )
}
