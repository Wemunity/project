import React from 'react'
import Article from '../components/bits/article'

export default function ArticleModule({ articles }) {
  return (
    <div className="article-module">
      {articles &&
        articles.map((article, index) => <Article key={article._key} index={index} article={article} />)}
    </div>
  )
}
