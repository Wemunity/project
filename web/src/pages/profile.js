import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';

import {
  setBasicSocialCare,
  setDailyChores,
  setProfessionalExperience,
  setProfessionalExperiences
} from '../state/onboarding';
import { experiences } from '../config/professionalExperiences';

import Button from '../components/bits/button';
import Certificate from '../components/bits/certificate';
import FormField from '../components/bits/formfield';
import RadioButton from '../components/bits/radiobutton';
import Checkbox from '../components/bits/checkbox';


import WemunityIconDark from '../assets/wemunity-icon-dark.svg';
import User from '../assets/user.jpeg';
import CrossIconWhite from '../assets/cross-icon-white.svg';

const Signup3 = props => {
  const onboardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();

  const [addExperience, setAddExperience] = useState(false);

  const onButtonClick = () => {
    setAddExperience(!addExperience);
    console.log('clicked');
    // console.log(val);
    // dispatch(setProfessionalExperience(val));
  };

  const suggestions = experiences;

  const handleDelete = i => {
    const ts = onboardingState.professionalExperiences.slice(0);
    ts.splice(i, 1);
    dispatch(setProfessionalExperiences(ts));
  };

  const handleAddition = tag => {
    const ts = [].concat(onboardingState.professionalExperiences, tag);
    dispatch(setProfessionalExperiences(ts));
    console.log('tag added');
    setAddExperience(!addExperience);
  };


  return (
    <div className="profile">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="profile__wrapper">
        <div className="profile__top">
          <div className="profile__user">
            <img className="profile__user-image" src={User} alt="user image"></img>
            <span>Farao Frisk</span>
          </div>
        </div>
        <div className="profile__content">
          <div className="profile__certificate">
            <Certificate
              immunityStatus={1}
            />
          </div>
          <div className="profile__settings">
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I would like to help with:</span>
              </div>
              <Checkbox
                text="Basic social care"
                caption=""
                value={true}
                // onChange={val => dispatch(setBasicSocialCare(val))}
              />
              <Checkbox
                text="Daily chores"
                caption=""
                value={true}
                // onChange={val => dispatch(setBasicSocialCare(val))}
              />
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I have professional experience with:</span>
              </div>
              <button className="profile__add-experience-button" onClick={onButtonClick}>Add&nbsp;
                <img src={CrossIconWhite} alt="+"/>
              </button>
              { addExperience ? (
              <ReactTags
                tags={onboardingState.professionalExperiences}
                suggestions={suggestions}
                placeholder={'Start typing..'}
                handleDelete={handleDelete.bind(this)}
                handleAddition={handleAddition.bind(this)}
              />
            ) : null }
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I have my drivers lisence</span>
              </div>
              <RadioButton

                // onClick={onButtonClick}
                // onChange={val => dispatch(setDriversLicense(val))}
              />
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>Where do you live?</span>
              </div>
              <FormField
                value={"Tøyen"}
                // topText={'Where do you live?'}
                placeholderText={'Location...'}
                // onChange={e => dispatch(setName(e.target.value))}
              />
            </div>
          </div>

        </div>
        <div className="profile__bottom">

        </div>
      </div>
    </div>
  );
};

export default Signup3;
