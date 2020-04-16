import React from 'react'
import Article from '../components/bits/article'

export default function ArticleModule({ articles }) {
  return (
    <div className="article-module">
      {articles.map(article => <Article key={article._key} {...{article}} />)}
    </div>
  )
}
