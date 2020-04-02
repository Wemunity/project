import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import ImageUploader from "react-images-upload";

import {
  setBasicSocialCare,
  setDailyChores,
  setProfessionalExperience,
  setProfessionalExperiences,
  setHasDriversLicense,
  // setDriversLicenseCar,
  // setDriversLicenseBus,
  // setDriversLicenseTruck,
  // setDriversLicenseMinibus,
  setDriversLicenses,
  setCanContact,
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

  // drivers license states
  // const [driversLicense, setDriversLicense] = useState(false);
  const updateLicenses = (name, value) => {
    const licenses = onboardingState.driversLicenses;
    if (name === "car") { licenses.car = value }
    if (name === "bus") { licenses.bus = value }
    if (name === "truck") { licenses.truck = value }
    if (name === "minibus") { licenses.minibus = value }
    if (name === "all") {
      licenses.car = value;
      licenses.bus = value;
      licenses.truck = value;
      licenses.minibus = value;
    }
    dispatch(setDriversLicenses(licenses));
  }

  const [viewDataAccess, setViewDataAccess] = useState(false);
  const handleViewDataAccess = () => {
    setViewDataAccess(!viewDataAccess);
    console.log(viewDataAccess);
  }

  // profile picture
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

  // React-tags
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
            <div className="profile__user-head">
              <span>Farao Frisk</span>
              <div className="profile__access-data">
                <span onClick={handleViewDataAccess}>Who can see my data?</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile__content">
          { viewDataAccess ?
            <div className="profile__certificate">
              <div className="profile__view-data">
                <div className="profile__view-data-wrapper">
                  <div className="profile__view-data-close" onClick={handleViewDataAccess}/>
                  <div className="profile__view-data-text">
                    <span>These are the organisations that have access to your data and can contact you. </span>
                  </div>
                  <Checkbox
                    text="Aker sykehus"
                    caption=""
                    // value={}
                    // onChange={val => dispatch(setBasicSocialCare(val))}
                  />
                </div>
              </div>
            </div>
            :
            <>
              <div className="profile__certificate">
                <Certificate
                  immunityStatus={1}
                />
              </div>
            </>
          }
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
                value={onboardingState.hasDriversLicense}
                onChange={val => {
                  val ? dispatch(setHasDriversLicense(val))
                  :
                  dispatch(setHasDriversLicense(false));
                  updateLicenses("all", false);
                }}
              />
              { onboardingState.hasDriversLicense ? <>
                <div className="profile__setting-headline">
                  <span>Which one(s)?</span>
                </div>
                <Checkbox
                  text="Car"
                  caption=""
                  value={onboardingState.driversLicenses.car}
                  onChange={val => updateLicenses("car", val)}
                />
                <Checkbox
                  text="Bus"
                  caption=""
                  value={onboardingState.driversLicenses.bus}
                  onChange={val => updateLicenses("bus", val)}
                />
                <Checkbox
                  text="Truck"
                  caption=""
                  value={onboardingState.driversLicenses.truck}
                  onChange={val => updateLicenses("truck", val)}
                />
                <Checkbox
                  text="Minibus"
                  caption=""
                  value={onboardingState.driversLicenses.minibus}
                  onChange={val => updateLicenses("minibus", val)}
                /> </>
               : null
              }
            </div>
            <div className="profile__setting">
              <div className="profile__setting-headline">
                <span>Can authorities or organisations in your area contact you for help?</span>
              </div>
              <RadioButton
                value={onboardingState.canContact}
                onChange={val => {
                  val ? dispatch(setCanContact(val))
                  :
                  dispatch(setCanContact(false));
                  dispatch(setContactAnytime(false));
                  dispatch(setContactDaytime(false));
                  dispatch(setContactNighttime(false));
                  dispatch(setContactSMS(false));
                  dispatch(setContactEmail(false));
                  dispatch(setContactCall(false));
                }}
              />
            </div>
            { onboardingState.canContact ? <>
              <div className="profile__setting">
                <div className="profile__setting-headline">
                  <span>You can contact me</span>
                </div>
                <Checkbox
                  text="Anytime"
                  caption=""
                  value={onboardingState.contactAnytime}
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
            </> : () => {
              dispatch(setContactAnytime(false));
            }
            }

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
