import React from 'react';

import Questionbubble from '../../assets/question-bubble.svg';

const RadioButton = props => {
  const text = props.text;

  return (
    <div className="radiofield">
      <div className="radiofield__text-wrapper">
        <span>{text}</span>
        <img src={Questionbubble} alt="?"></img>
      </div>
      <form>
        <div className="radiofield__wrapper">
          <label className="radiofield__container"><span>Yes</span>
            <input type="radio" checked="checked" name="radio"/>
            <span className="radiofield__checkmark"></span>
          </label>
          <label className="radiofield__container"><span>No</span>
            <input type="radio" name="radio"/>
            <span className="radiofield__checkmark"></span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default RadioButton;
