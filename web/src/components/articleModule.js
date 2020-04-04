import React from 'react'
import Article from '../components/bits/article'

export default function ArticleModule(props) {
  return (
    <div className="article-module">
      {props.articles &&
        props.articles.map((article, index) => <Article key={article.key} index={index} article={article} />)}
    </div>
  )
}
