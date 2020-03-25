import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setName, setLocation, setAge, setDriversLicense } from '../../state/onboarding';

import FormField from '../../components/bits/formfield';
import Dots3 from '../../assets/dots3.svg';

import Button from '../../components/bits/button';
import RadioButton from '../../components/bits/radiobutton';
//When did you start showing symptoms?



const Signup4 = props => {

  const onBoardingState = useSelector(state => state.onboarding)
  const dispatch = useDispatch()

  console.dir(onBoardingState)

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
              <FormField value={onBoardingState.name} topText={'My name'} placeholderText={'Jon Doe'} onChange={(e) => dispatch(setName(e.target.value))}/>
            </div>
            <div className="signup4__form-field">
              <FormField value={onBoardingState.location} topText={'Where do you live?'} placeholderText={'Tøyen'} onChange={(e) => dispatch(setLocation(e.target.value))}/>
            </div>
            <div className="signup4__form-field">
              <FormField value={onBoardingState.age} topText={'How old are you?'} placeholderText={'30'} onChange={(e) => dispatch(setAge(e.target.value))}/>
            </div>
          </div>
          <div className="signup4__radiofield">
            <RadioButton value={onBoardingState.driversLicense} text="I have my drivers license" onChange={(val) => dispatch(setDriversLicense(val))}/>
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

// export default connect(
//   state => ({ onboardingState: state.onboarding})
// )(Signup4);
