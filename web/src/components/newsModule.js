import React from 'react';

import PageTitle from './bits/pageTitle';
import NewsArticles from './newsArticles';


const NewsModule = ({ m }) => {
  // console.log(m);
  m.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });
  var selectedArticles;
  if (m.length < 3){
    selectedArticles = m;
  }
  else{
    selectedArticles = m.slice(0,3);
  }
  // console.log(selectedArticles);
  return (
    <div className="module news-module">
      <div className="news-module__wrapper">
        <div className="news-module__content">
          <PageTitle
            title={'Latest news'}
            subtitle={''}
            />
          <NewsArticles articles={selectedArticles} />
        </div>
      </div>
    </div>
  );
};

export default NewsModule;
