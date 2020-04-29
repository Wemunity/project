import React from 'react'
import NewsArticle from '../components/bits/newsArticle'

export default function NewsArticles({ articles }) {
  return (
    <div className="article-module">
      {articles.map(article => <NewsArticle key={article._id} {...{article}} />)}
    </div>
  )
}
