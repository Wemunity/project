import React, { useState } from 'react';
import Dots4 from '../../assets/dots4.svg';

import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import RadioButton from '../../components/bits/radiobutton';
import FormField from '../../components/bits/formfield';
//When did you start showing symptoms?


const Signup5 = props => {

  // const [showExperience, setShowExperience] = useState(false);
  // const handleShowExperience = () => {
  //   setShowExperience(!showExperience);
  // };

  const [radioResponse, setRadioResponse] = useState(false);
  const onRadioButtonClick = (name) => {
    console.log(name);
    setRadioResponse(name);
  }

  return (
    <div className="signup5">
      <div className="signup5__wrapper">
        <div className="signup5__top">
          <span>There are many ways we all can contribute</span>
        </div>
        <div className="signup5__content">

          <span><b>How do you want to help?</b></span><br/>
          <div className="signup5__checkboxfield">
            <Checkbox text="Basic social care" caption="Like visiting, calling someone, taking a walk"/>
          </div>
          <div className="signup5__checkboxfield">
            <Checkbox text="Daily chores" caption="like grocery shopping, medicines, delivery etc"/>
          </div>
          <div className="signup5__radiofield">
            <RadioButton onClick={onRadioButtonClick} checkedState={radioResponse} text="Do you have professional experience?"/>
          </div>
          {radioResponse === 'yes' ? <FormField onChange={''} placeholderText="Admin, Psychologist, Trucker" /> : null}
        </div>
        <div className="signup5__bottom">
          <Button text={'Finish'} light={false} link={'/welcome'}/>
          <img className="signup5__dots" src={Dots4} alt="- * * *"/>
        </div>
      </div>
    </div>
  );
};

export default Signup5;
