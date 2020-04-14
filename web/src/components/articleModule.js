import React from 'react'
import Article from '../components/bits/article'
import PageTitle from './bits/pageTitle'

export default function ArticleModule({ articles }) {
  return (
    <div className="article-module">
      {articles.map(article => <Article key={article._key} {...{article}} />)}
    </div>
  )
}
