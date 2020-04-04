import React from 'react'

export default function Article({ article }) {
  return (
    <div className="article-module__article">
      <img src={article.listImage} alt={article.title} />
      <h4>{article.title}</h4>
      <span>{article.publishDate} - {article.source}</span>
      <a href={article.link} target="_blank">
        Read more
      </a>
    </div>
  )
}
