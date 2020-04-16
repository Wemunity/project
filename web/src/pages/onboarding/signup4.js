import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  setCanContact,
  setContactDaytime,
  setContactNighttime,
  // setContactMorning,
  setContactSMS,
  setContactEmail,
  setContactCall,
  setHelpFulltime,
  setHelpSometimes,
  setHelpNotmuch,
  setPhoneNumber,
  setEmail
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
          <span>Kan Kommunen kontakte deg for hjelp?</span>
        </div>
        <div className="signup4__content">
          <div className="signup4__field">
            <RadioButton
              value={onboardingState.canContact}
              onChange={val => {
                val ? dispatch(setCanContact(val))
                :
                dispatch(setCanContact(false));
                dispatch(setContactDaytime(false));
                dispatch(setContactNighttime(false));
                dispatch(setContactSMS(false));
                dispatch(setContactEmail(false));
                dispatch(setContactCall(false));
                dispatch(setPhoneNumber(''));
                dispatch(setEmail(''));
              }}
            />
          </div>
          { onboardingState.canContact ? <>
            <div className="signup4__field">
              <div className="signup4__field-headline">
                Når på døgnet vil du bli kontaktet?
              </div>
              <div className="signup4__checkboxes">
                <Checkbox
                  text="Dagtid"
                  caption=""
                  value={onboardingState.contactDaytime}
                  onChange={val => dispatch(setContactDaytime(val))}
                />
                <Checkbox
                  text="Kveldstid"
                  caption=""
                  value={onboardingState.contactNighttime}
                  onChange={val => dispatch(setContactNighttime(val))}
                />
              </div>
            </div>
            <div className="signup4__field">
              <div className="signup4__field-headline">
                Hvor mye har du tid til å hjelpe?
              </div>
              <div className="signup4__checkboxes">
                <Checkbox
                  text="Fulltid"
                  caption=""
                  value={onboardingState.helpFulltime}
                  onChange={val => dispatch(setHelpFulltime(val))}
                />
                <Checkbox
                  text="Innimellom"
                  caption=""
                  value={onboardingState.helpSometimes}
                  onChange={val => dispatch(setHelpSometimes(val))}
                />
                <Checkbox
                  text="Ikke så mye"
                  caption=""
                  value={onboardingState.helpNotmuch}
                  onChange={val => dispatch(setHelpNotmuch(val))}
                />
              </div>
            </div>
            <div className="signup4__field">
              <div className="signup4__field-headline">
                Hvordan vil du bli kontaktet?
              </div>
              <div className="signup4__checkboxes">
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
                  text="Ring meg"
                  caption=""
                  value={onboardingState.contactCall}
                  // onChange={val => handleContactTime(val)}
                  onChange={val => dispatch(setContactCall(val))}
                />
              </div>
              { onboardingState.contactSMS || onboardingState.contactCall ?
                <div className="signup4__field">
                  <div className="signup4__field-headline">
                    Ditt telefonnummer
                  </div>
                  <FormField
                    value={onboardingState.phoneNumber}
                    placeholderText={'(+47) xx xx xx xx'}
                    onChange={e => dispatch(setPhoneNumber(e.target.value))}
                  />
                </div>
                : null
               }
               { onboardingState.contactEmail ?
                 <div className="signup4__field">
                   <div className="signup4__field-headline">
                     Din emailadresse
                   </div>
                   <FormField
                     value={onboardingState.email}
                     placeholderText={'chill@my.place'}
                     onChange={e => dispatch(setEmail(e.target.value))}
                   />
                 </div>
                 : null
                }
            </div>
          </> : null
          }
        </div>
        <div className="signup4__bottom">
          <Button text={'Neste'} light={false} link={'/signup/5'} />
          <div className="signup4__dots">
            <Dots active="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup4;
