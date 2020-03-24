import React from 'react';
import FormField from '../../components/bits/formfield';
import Dots3 from '../../assets/dots3.svg';

import Button from '../../components/bits/button';
import RadioButton from '../../components/bits/radiobutton';
//When did you start showing symptoms?



const Signup4 = props => {
  return (
    <div className="signup4">
      <div className="signup4__wrapper">
        <div className="signup4__top">
          <div className="signup4__profileimage"></div>
          <div className="signup4__image-text"><span>Upload profile picture</span></div>
        </div>
        <div className="signup4__content">
          <div className="signup4__form">
            <div className="signup4__form-field">
              <FormField topText={'My name'} placeholderText={'Jon Doe'}/>
            </div>
            <div className="signup4__form-field">
              <FormField topText={'Where do you live?'} placeholderText={'Tøyen'}/>
            </div>
            <div className="signup4__form-field">
              <FormField topText={'How old are you?'} placeholderText={'30'}/>
            </div>
          </div>
          <div className="signup4__radiofield">
            <RadioButton text="I have my drivers license"/>
          </div>
        </div>
        <div className="signup4__bottom">
          <Button text={'Next'} light={false} link={'/signup/5'}/>
          <img className="signup4__dots" src={Dots3} alt="- * * *"/>
        </div>
      </div>
    </div>
  );
};

export default Signup4;
