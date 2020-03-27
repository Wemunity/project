import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageUploader from "react-images-upload";

import { setName, setLocation, setAge, setDriversLicense } from '../../state/onboarding';

import FormField from '../../components/bits/formfield';
import Dots from '../../components/bits/dots';
import Button from '../../components/bits/button';
import RadioButton from '../../components/bits/radiobutton';

import CrossIcon from '../../assets/cross-icon-blue.svg';
import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';

//When did you start showing symptoms?



const Signup4 = props => {

  const [pictures, setPictures] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const onBoardingState = useSelector(state => state.onboarding)
  const dispatch = useDispatch()

  console.dir(onBoardingState)

  return (
    <div className="signup4">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø"/>
      <div className="signup4__wrapper">
        <div className="signup4__top">
          <div className="imageUploader">
            <ImageUploader
              {...props}
              buttonText="+"
              withLabel={false}
              withIcon={false}
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              singleImage={true}
              withPreview={true}
            />
          </div>
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
          <div className="signup3__dots">
            <Dots active="3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;

// <img src={CrossIcon} alt="+"/>
// export default connect(
//   state => ({ onboardingState: state.onboarding})
// )(Signup4);
