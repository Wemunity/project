import React, { Fragment } from 'react';
import useSWR from "swr";
import client from '../lib/sanity';
import { buildImageObj } from '../lib/helpers';
import imageUrlFor from '../lib/image-url';

import Footer from '../components/footer.js';
import NavBar from '../components/navbar.js';
import PageTitle from '../components/bits/pageTitle';


function Grid(props) {
  function mapGrid() {
    var arr = [];
    var left = 0;
    var spacing = 0.8;
    arr.push(<div className="grid__grid1" style={{left:`${left}%`}}/>)
    var i;
    for (i=0; i<11; i++){
      left += 7.44+spacing;
      arr.push(<div className="grid__grid1" style={{left:`${left}%`}}/>)
    }
    return arr;
  }

  return (
    <div className="grid">
      <NavBar {...props} theme="light" />
      <div className="grid__wrapper">
        {
            //mapGrid()
        }
        <div className="grid__grid-wrapper">
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
          <div className="grid__grid-element"/>
        </div>
        {/*<div className="grid__grid1"></div>
        <div className="grid__grid2"></div>
        <div className="grid__grid3"></div>*/}
        <div className="grid__indentOne">
          <div className="grid__title">This is a title</div>
          Intent one column on both sides
        </div>
        <div className="grid__indentTwo">Intent two columns on both sides</div>
        <div className="grid__indentThree">Intent three columns on both sides</div>
        <div className="grid__indentTwoLeftOneRight">Indent two columns on left side, one column on right side</div>

      </div>
    </div>
  );
}

export default Grid;
