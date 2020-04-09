import React from 'react';
import PageTitle from './bits/pageTitle';

export default function PressKitModule({ data }) {
  return (
    <div className="press-kit-module">
      <PageTitle title={data.pressKitTitle} subtitle={data.pressKitDescription} />
    </div>
  )
}
