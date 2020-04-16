import React from 'react';

import NavBar from '../components/navbar.js';

function GridPage(props) {
  // function mapGrid() {
  //   var arr = [];
  //   var left = 0;
  //   var spacing = 0.8;
  //   arr.push(<div className="grid__grid1" style={{left:`${left}%`}}/>)
  //   var i;
  //   for (i=0; i<11; i++){
  //     left += 7.44+spacing;
  //     arr.push(<div className="grid__grid1" style={{left:`${left}%`}}/>)
  //   }
  //   return arr;
  // }
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
        <div className="grid__indentOne">
          <div className="grid__title">This is a title</div>
          Indent one column on both sides
        </div>
        <div className="grid__indentTwo">Indent two columns on both sides</div>
        <div className="grid__indentThree">Indent three columns on both sides</div>
        <div className="grid__indentTwoLeftOneRight">Indent two columns on left side, one column on right side</div>

      </div>
    </div>
  )
}

export default GridPage;
