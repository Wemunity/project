import React, { useState } from 'react';

import LocationIcon from '../assets/location-icon.svg';
import CrossIcon from '../assets/cross-icon2.svg';
import TestPicture from '../assets/testpicture.png';
import ArrowButton from '../assets/arrowbutton.svg';
import MapTest from '../assets/map-test.png';

//Welcome
const List = props => {

  const task1 = {
    location: 'Ullevål Sykehus',
    text: 'Trenger hjelp til noe sykehusgreier.',
    people: 22,
  }
  const tasks = [task1, task1, task1]

  return (
    <div className="tasks__list">
      {
        tasks.map((value, key) => {
          return <div className="tasks__list-item" key={key}>
            <img className="tasks__list-item__picture" src={TestPicture} alt="person"/>
            <div className="tasks__list-item__text">
              <div className="tasks__list-item__text-heading"><span>{value.location}<br/></span></div>
              <div className="tasks__list-item__text-content"><span>{value.text} {value.people} er her allerede</span></div>
              <img className="tasks__list-item__text-arrow" src={ArrowButton} alt="->"></img>
            </div>
          </div>
        })
      }

    </div>
  );
};

const Map = props => {
  return(
    <div className="map">
      <img src={MapTest} alt="map"></img>
    </div>
  );
};


const Tasks = props => {

  const tags = ['Emotional', 'Practical'];
  const [listView, setListView] = useState(true);
  const [mapView, setMapView] = useState(false);

  const toggleList = () =>{
    setListView(true);
    setMapView(false);
    console.log('listView: ' + listView);
    console.log('mapView: ' + mapView);


    // return listView ? <List/> : <Map/>
  };
  const toggleMap = () =>{
    setListView(false);
    setMapView(true);
    console.log('listView: ' + listView);
    console.log('mapView: ' + mapView);
  }

  return (
    <div className="tasks">
      <div className="tasks__wrapper">
        <div className="tasks__top">
          <div className="tasks__location">
            <img className="tasks__location-icon" src={LocationIcon} alt="location icon"/>
            <span>Tøyen</span>
          </div>
          <p><b>What kind of tasks do you want to do?</b></p>
          <div className="tasks__tags">
            {
              tags.map((value, key) => {
                return <div className="tasks__tagelement" key={key}>
                  <span>{value}</span>
                  <img className="tasks__tagelement-icon" src={CrossIcon} alt=""/>
                </div>
              })
            }
          </div>
        </div>
        <div className="tasks__content">
          <div className="tasks__toggle-view">
            <div className="tasks__toggle-view-button" onClick={toggleList}><span>{listView ? <b>List</b> : 'List'}</span></div>
            <div className="tasks__toggle-view-button" onClick={toggleMap}><span>{mapView ? <b>Map</b> : 'Map'}</span></div>
          </div>
          <div className="tasks__content-field">
            {listView ? <List/> : <Map/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
