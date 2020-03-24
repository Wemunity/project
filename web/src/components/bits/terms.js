import React, { setState } from 'react';
import CrossIcon from '../../assets/cross-icon2.svg';
import Signup2 from '../../pages/onboarding/signup2';

const Terms = props => {
  const text = props.text;

  const onCrossClick = (event) => {
    props.onClick && props.onClick(event.target.name)
  }

  return (
    <div className="terms">
      <div className="terms__wrapper">
        <img onClick={onCrossClick} name="cross" className="terms__cross" src={CrossIcon} alt="x"/>

        <div className="terms__text">
          <span>These are the terms<br/>
            <br/>1. Do not go out of your house
            <br/>2. Pick your nose only with your toes
            <br/>3. Do not pee on the neighbour's terrace unless it's revenge from when his dog peed on yours
            <br/>4. Don't cough on people for fun
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
