import React from 'react';

import Questionbubble from '../../assets/question-bubble.svg';

const RadioButton = props => {

  const onRadioChange = (event) => {
    props.onChange && props.onChange(event.target.value === "true" ? true : false)
  }

  return (
    <div className="radiofield">
      <div className="radiofield__text-wrapper">
        <span>{props.text}</span>
        { props.questionBubble ? <img src={Questionbubble} alt="?"></img> : null}
      </div>
      <form>
        <div className="radiofield__wrapper">
          <label className="radiofield__container"><span>Ja</span>
            <input onChange={onRadioChange} name="radio-button" type="radio" checked={props.value} value="true"/>
            <span className="radiofield__checkmark"></span>
          </label>
          <label className="radiofield__container"><span>Nei</span>
            <input onChange={onRadioChange} name="radio-button" type="radio" checked={!props.value} value="false"/>
            <span className="radiofield__checkmark"></span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default RadioButton;
