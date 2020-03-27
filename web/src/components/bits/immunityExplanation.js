import React from 'react';
import CrossIcon from '../../assets/cross-icon2.svg';

const ImmunityExplanation = props => {

  const onCrossClick = (event) => {
    props.onClick && props.onClick(event.target.name)
  }

  return (
    <div className="terms">
      <div className="terms__wrapper">
        <img onClick={onCrossClick} name="cross" className="terms__cross" src={CrossIcon} alt="x" style={{cursor:'pointer'}}/>

        <div className="terms__text">
          <span>This is what it means to have verified immunity<br/>
            <br/>1. point one
            <br/>2. second point
            <br/>3. and some more stuff
            <br/>4. punchline maybe
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImmunityExplanation;
