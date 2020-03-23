import React from 'react';
import Dots4 from '../../assets/dots4.svg';

import Welcome from '../../pages/onboarding/welcome';
import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import RadioButton from '../../components/bits/radiobutton';
//When did you start showing symptoms?

const Signup5 = props => {
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
            <RadioButton text="Do you have professional experience?"/>
          </div>
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
