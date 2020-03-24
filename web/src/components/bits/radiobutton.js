import React from 'react';

import Questionbubble from '../../assets/question-bubble.svg';

const RadioButton = props => {
  const text = props.text;

  const onButtonClick = (event) => {
    props.onClick && props.onClick(event.target.name)
  }
  return (
    <div className="radiofield">
      <div className="radiofield__text-wrapper">
        <span>{text}</span>
        <img src={Questionbubble} alt="?"></img>
      </div>
      <form>
        <div className="radiofield__wrapper">
          <label className="radiofield__container"><span>Yes</span>
            <input onClick={onButtonClick} type="radio" checked={props.checkedState === 'yes' ? 'checked' : null} name="yes"/>
            <span className="radiofield__checkmark"></span>
          </label>
          <label className="radiofield__container"><span>No</span>
            <input onClick={onButtonClick} type="radio" checked={props.checkedState === 'no' ? 'checked' : null} name="no"/>
            <span className="radiofield__checkmark"></span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default RadioButton;
