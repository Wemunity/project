import React, { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import ArticleModule from '../components/articleModule'
import testImage from '../assets/map-test.png'

export default function PressPage(props) {
  const test = [{
    key: "1",
    listImage: testImage,
    title: "The Gruffalo author Julia Donaldson shows her characters social distancing",
    publishDate: "29.03.20",
    source: "BBC",
    link: "https://www.bbc.com/news/entertainment-arts-52149055"
  },
  {
    key: "2",
    listImage: testImage,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod elementum eleifend. Aliquam erat volutpat. Proin at dignissim neque. In tincidunt tempor euismod. Duis laoreet.",
    publishDate: "29.03.20",
    source: "BBC",
    link: "https://www.bbc.com/news/entertainment-arts-52149055"
  },
  {
    key: "3",
    listImage: testImage,
    title: "The Gruffalo author Julia Donaldson shows her characters social distancing",
    publishDate: "29.03.20",
    source: "BBC",
    link: "https://www.bbc.com/news/entertainment-arts-52149055"
  },
  {
    key: "4",
    listImage: testImage,
    title: "The Gruffalo author Julia Donaldson shows her characters social distancing",
    publishDate: "29.03.20",
    source: "BBC",
    link: "https://www.bbc.com/news/entertainment-arts-52149055"
  }]
  return (
    <div className="pressPage">
      <NavBar {...props} theme="light" />
      <ArticleModule articles={test} />
    </div>
  )
}
