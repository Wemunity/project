import React from 'react'

export default function PageTitle(props) {
  return (
    <div className={`pageTitle ${props.blue ? "blue" : ""}`}>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
    </div>
  )
}
