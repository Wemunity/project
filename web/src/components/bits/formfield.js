import React from 'react';
import ArrowBlue from '../../assets/arrow-blue.svg';
import ArrowWhite from '../../assets/arrow-white.svg';

const FormField = props => {
  const lightText = props.lightText;
  const topText = props.topText;
  const placeholderText = props.placeholderText;
  const arrow = props.arrow;
  var textColor = lightText ? '#FFF' : '#090039';

  return (
    <div className="formfield">
      <div className="formfield__toptext">
        <span>{topText}</span>
      </div>
      <div className="formfield__content">
        <span>{placeholderText}</span>
        {arrow === true ? <img className="formfield__arrow" src={lightText === true ? ArrowWhite: ArrowBlue} alt="->"/> : null}
      </div>
      <div className="formfield__line"/>
    </div>
  );
};

export default FormField;
