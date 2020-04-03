import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageUploader from "react-images-upload";
import { Redirect } from 'react-router-dom';
import {
  setPicture,
  setName,
  setLocation,
  setAge,

} from '../../state/onboarding';

import FormField from '../../components/bits/formfield';
import Dots from '../../components/bits/dots';
import Button from '../../components/bits/button';
import RadioButton from '../../components/bits/radiobutton';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';


const Signup2 = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();

  console.dir(onBoardingState);

  const [errorState, setErrorState] = useState({});
  const [redirect, setRedirect] = useState(false);

  const [pictures, setPictures] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
    console.log(picture[0]);
    if ( picture[0] !== undefined ) {
      var imgFile = URL.createObjectURL(picture[0]);
      console.log(imgFile);
      dispatch(setPicture(imgFile));
    }
    else { dispatch(setPicture(undefined)); }
  };

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
      setRedirect(<Redirect push to="/signup/3" />);
    } else {
      setErrorState(errors);
    }
  };

  // useEffect(() => {
  //   if (!onBoardingState.agreeTerms) {
  //     setRedirect(<Redirect push to="/signup/2" />);
  //   }
  // }, [onBoardingState.agreeTerms]);

  return (
    <div className="signup2">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="signup2__wrapper">
        <div className="signup2__top">
          <div className="imageUploader">
            <ImageUploader
              {...props}
              buttonText="+"
              withLabel={false}
              withIcon={false}
              onChange={onDrop}
              imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              singleImage={true}
              withPreview={true}
              errorClass="errors"
            />
          </div>
          <div className="signup2__image-text">
            <span>Upload profile picture</span>
          </div>
        </div>
        <div className="signup2__content">
          <div className="signup2__form">
            <div
              className={`signup2__form-field ${errorState.name &&
                'signup2__form-field--paddingTop'}`}
            >
              {errorState.name && (
                <span className="signup2__error">{errorState.name}</span>
              )}
              <FormField
                value={onBoardingState.name}
                topText={'My name'}
                placeholderText={'Jon Doe'}
                onChange={e => dispatch(setName(e.target.value))}
              />
            </div>
            <div
              className={`signup2__form-field ${errorState.location &&
                'signup2__form-field--paddingTop'}`}
            >
              {errorState.location && (
                <span className="signup2__error">{errorState.location}</span>
              )}
              <FormField
                value={onBoardingState.location}
                topText={'Where do you live?'}
                placeholderText={'Tøyen'}
                onChange={e => dispatch(setLocation(e.target.value))}
              />
            </div>
            <div
              className={`signup2__form-field ${errorState.age &&
                'signup2__form-field--paddingTop'}`}
            >
              {errorState.age && (
                <span className="signup2__error">{errorState.age}</span>
              )}
              <FormField
                value={onBoardingState.age}
                topText={'How old are you?'}
                placeholderText={'30'}
                onChange={e => dispatch(setAge(e.target.value))}
              />
            </div>
          </div>

        </div>
        <div className="signup2__bottom">
          <Button
            handleValidation={handleValidation}
            text={'Next'}
            light={false}
            link={'/signup/3'}
          />
          {redirect}
          <div className="signup2__dots">
            <Dots active="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
