import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  setName,
  setLocation,
  setAge,
  setDriversLicense
} from '../../state/onboarding';

import FormField from '../../components/bits/formfield';
import Dots from '../../components/bits/dots';
import Button from '../../components/bits/button';
import RadioButton from '../../components/bits/radiobutton';

import CrossIcon from '../../assets/cross-icon-blue.svg';
import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';

//When did you start showing symptoms?

const Signup4 = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();
  const [errorState, setErrorState] = useState({});
  const [redirect, setRedirect] = useState(false);

  console.dir(onBoardingState);

  const handleValidation = () => {
    let errors = {};
    if (onBoardingState.name.trim() === '') {
      errors = { ...errors, name: 'This field cant be empty' };
    }
    if (onBoardingState.location.trim() === '') {
      errors = { ...errors, location: 'This field cant be empty' };
    }
    if (onBoardingState.age.trim() === '') {
      errors = { ...errors, age: 'This field cant be empty' };
    }

    const errorCheck = Object.keys(errors);
    if (errorCheck.length === 0) {
      setRedirect(<Redirect push to="/signup/5" />);
    } else {
      setErrorState(errors);
    }
  };

  return (
    <div className="signup4">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="signup4__wrapper">
        <div className="signup4__top">
          <div className="signup4__profileimage">
            <img src={CrossIcon} alt="+" />
          </div>
          <div className="signup4__image-text">
            <span>Upload profile picture</span>
          </div>
        </div>
        <div className="signup4__content">
          <div className="signup4__form">
            <div
              className={`signup4__form-field ${errorState.name &&
                'signup4__form-field--paddingTop'}`}
            >
              {errorState.name && (
                <span className="signup4__error">{errorState.name}</span>
              )}
              <FormField
                value={onBoardingState.name}
                topText={'My name'}
                placeholderText={'Jon Doe'}
                onChange={e => dispatch(setName(e.target.value))}
              />
            </div>
            <div
              className={`signup4__form-field ${errorState.location &&
                'signup4__form-field--paddingTop'}`}
            >
              {errorState.location && (
                <span className="signup4__error">{errorState.location}</span>
              )}
              <FormField
                value={onBoardingState.location}
                topText={'Where do you live?'}
                placeholderText={'Tøyen'}
                onChange={e => dispatch(setLocation(e.target.value))}
              />
            </div>
            <div
              className={`signup4__form-field ${errorState.age &&
                'signup4__form-field--paddingTop'}`}
            >
              {errorState.age && (
                <span className="signup4__error">{errorState.age}</span>
              )}
              <FormField
                value={onBoardingState.age}
                topText={'How old are you?'}
                placeholderText={'30'}
                onChange={e => dispatch(setAge(e.target.value))}
              />
            </div>
          </div>
          <div className="signup4__radiofield">
            <RadioButton
              value={onBoardingState.driversLicense}
              text="I have my drivers license"
              onChange={val => dispatch(setDriversLicense(val))}
            />
          </div>
        </div>
        <div className="signup4__bottom">
          <Button
            handleValidation={handleValidation}
            text={'Next'}
            light={false}
            link={'/signup/5'}
          />
          {redirect}
          <div className="signup3__dots">
            <Dots active="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;

// export default connect(
//   state => ({ onboardingState: state.onboarding})
// )(Signup4);
