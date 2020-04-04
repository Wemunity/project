import React from 'react'
import Article from '../components/bits/article'

export default function ArticleModule(props) {
  return (
    <div className="article-module">
      {props.articles &&
        props.articles.map(article => <Article key={article.key} article={article} />)}
    </div>
  )
}
