import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  setCanContact,
  setContactDaytime,
  setContactNighttime,
  setContactAnytime,
  setContactSMS,
  setContactEmail,
  setContactCall,
  setPhoneNumber,
} from '../../state/onboarding';
import { experiences } from '../../config/professionalExperiences';

import ReactTags from 'react-tag-autocomplete';
import FormField from '../../components/bits/formfield';
import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import RadioButton from '../../components/bits/radiobutton';

import Dots from '../../components/bits/dots';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';
//When did you start showing symptoms?

const Signup4 = props => {
  const [redirect, setRedirect] = useState(null);


  const onboardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();
  console.dir(onboardingState);


  return (
    <div className="signup4">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="signup4__wrapper">
        <div className="signup4__top">
          <span>Can the authorities or organisations contact you for help?</span>
        </div>
        <div className="signup4__content">
          <div className="signup4__field">
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
            <div className="signup4__field">
              <div className="signup4__field-headline">
                When is a good time for you?
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
            <div className="signup4__field">
              <div className="signup4__field-headline">
                How do you want to be contacted?
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
          <div className="signup4__field">
            <div className="signup4__field-headline">
              Your phone number
            </div>
            <FormField
              value={onboardingState.phoneNumber}
              placeholderText={'(+47) 815 493 00'}
              onChange={e => dispatch(setPhoneNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="signup4__bottom">
          <Button text={'Next'} light={false} link={'/signup/5'} />
          <div className="signup4__dots">
            <Dots active="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;
