import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import ImageUploader from "react-images-upload";

import {
  setBasicSocialCare,
  setDailyChores,
  setProfessionalExperience,
  setProfessionalExperiences,
  setDriversLicense,
  setDriversLicenseCar,
  setDriversLicenseBus,
  setDriversLicenseTruck,
  setDriversLicenseMinibus,
  setDriversLicenses,
  setContactDaytime,
  setContactNighttime,
  setContactAnytime,
  setContactSMS,
  setContactEmail,
  setContactCall,
  setPhoneNumber,
  setLocation,
  setPicture,
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

  console.dir(onboardingState);

  // const [addExperience, setAddExperience] = useState(false);

  // const onButtonClick = () => {
  //   setAddExperience(!addExperience);
  //   // console.log(val);
  //   // dispatch(setProfessionalExperience(val));
  // };

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

  const suggestions = experiences;

  const handleDelete = i => {
    const ts = onboardingState.professionalExperiences.slice(0);
    ts.splice(i, 1);
    dispatch(setProfessionalExperiences(ts));
  };

  const handleAddition = tag => {
    const ts = [].concat(onboardingState.professionalExperiences, tag);
    dispatch(setProfessionalExperiences(ts));
    // setAddExperience(!addExperience);
  };

  return (
    <div className="profile">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="profile__wrapper">
        <div className="profile__top">
          <div className="profile__user">
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
            {/* <img className="profile__user-image" src={User} alt="user image"></img> */}
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
                <span>I am able to help with:</span>
              </div>
              <Checkbox
                text="Basic social care"
                caption=""
                value={onboardingState.socialCare}
                onChange={val => dispatch(setBasicSocialCare(val))}
              />
              <Checkbox
                text="Daily chores"
                caption=""
                value={onboardingState.dailyChores}
                onChange={val => dispatch(setDailyChores(val))}
              />
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I have professional experience with:</span>
              </div>
              {/*
              <div className="react-tags__selected">
              { onboardingState.professionalExperiences.map((value, key) => {
                  return <button type="button" className="react-tags__selected-tag" height="24px" title="click to remove tag">
                  <span key={key} className="react-tags__selected-tag-name">{value.name}</span>
                  </button>
                })
              }
              <button className="profile__add-experience-button" onClick={onButtonClick}>Add&nbsp;
                <img src={CrossIconWhite} alt="+"/>
              </button>
              </div>
              { addExperience ? (
              */}
              { <ReactTags
                  tags={onboardingState.professionalExperiences}
                  suggestions={suggestions}
                  placeholder={'Add another...'}
                  handleDelete={handleDelete.bind(this)}
                  handleAddition={handleAddition.bind(this)}
                />
              }
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I have my drivers license</span>
              </div>
              <RadioButton
                value={onboardingState.driversLicense}
                onChange={val => dispatch(setDriversLicense(val))}
              />
              { onboardingState.driversLicense ? <>
                <Checkbox
                  text="Car"
                  caption=""
                  value={onboardingState.driversLicenseCar}
                  onChange={val => dispatch(setDriversLicenseCar(val))}
                />
                <Checkbox
                  text="Bus"
                  caption=""
                  value={onboardingState.driversLicenseBus}
                  onChange={val => dispatch(setDriversLicenseBus(val))}
                />
                <Checkbox
                  text="Truck"
                  caption=""
                  value={onboardingState.driversLicenseTruck}
                  onChange={val => dispatch(setDriversLicenseTruck(val))}
                />
                <Checkbox
                  text="Minibus"
                  caption=""
                  value={onboardingState.driversLicenseMinibus}
                  onChange={val => dispatch(setDriversLicenseMinibus(val))}
                /> </>
               : null
              }
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>You can contact me</span>
              </div>
              <Checkbox
                text="Anytime"
                caption=""
                value={onboardingState.contactAnytime}
                // onChange={val => handleContactTime(val)}
                onChange={val => {
                  dispatch(setContactAnytime(val));
                  dispatch(setContactDaytime(val));
                  dispatch(setContactNighttime(val));
                }}
              />
              { onboardingState.contactAnytime ?
                null : <>
                  <Checkbox
                    text="Daytime"
                    caption=""
                    value={onboardingState.contactDaytime}
                    onChange={val => {
                      dispatch(setContactDaytime(val));
                      if (val && onboardingState.contactNighttime) {
                        dispatch(setContactAnytime(true));
                      }
                    }}
                  />
                  <Checkbox
                    text="Nighttime"
                    caption=""
                    value={onboardingState.contactNighttime}
                    onChange={val => {
                      dispatch(setContactNighttime(val));
                      if (onboardingState.contactDaytime && val) {
                        dispatch(setContactAnytime(true));
                      }
                    }}
                  />
                </>
              }

            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>You can contact me on</span>
              </div>
              <Checkbox
                text="SMS"
                caption=""
                value={onboardingState.contactSMS}
                // onChange={val => handleContactTime(val)}
                onChange={val => dispatch(setContactSMS(val))}
              />
              <Checkbox
                text="Email"
                caption=""
                value={onboardingState.contactEmail}
                // onChange={val => handleContactTime(val)}
                onChange={val => dispatch(setContactEmail(val))}
              />
              <Checkbox
                text="Call me"
                caption=""
                value={onboardingState.contactCall}
                // onChange={val => handleContactTime(val)}
                onChange={val => dispatch(setContactCall(val))}
              />
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>My phone number is</span>
              </div>
              <FormField
                value={onboardingState.phoneNumber}
                placeholderText={'815 493 00'}
                onChange={e => dispatch(setPhoneNumber(e.target.value))}
              />
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>I live at</span>
              </div>
              <FormField
                value={onboardingState.location}
                placeholderText={'Tøyen'}
                onChange={e => dispatch(setLocation(e.target.value))}
              />
            </div>
            <div className="profile__delete-data">
              <span>Delete my data</span>
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
