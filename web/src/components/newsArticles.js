import React from 'react'
import NewsArticlePreview from '../components/bits/newsArticlePreview'

export default function NewsArticles({ articles }) {
  return (
    <div className="article-module">
      {
        articles.map((article, key) => {
          const counter = key + 1;
          var size = 'big';
          if (counter % 3 === 1){
            return <NewsArticlePreview key={article._id} {...{article, size}}/>
          }
          size = 'small';
          return <NewsArticlePreview key={article._id} {...{article, size}}/>
        })
      }
    </div>
  )
}
