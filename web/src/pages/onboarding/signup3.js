import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  setBasicSocialCare,
  setDailyChores,
  setProfessionalExperience,
  setProfessionalExperiences,
  setHasDriversLicense,
  setDriversLicenses,
} from '../../state/onboarding';
import { experiences } from '../../config/professionalExperiences';

import ReactTags from 'react-tag-autocomplete';
import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import RadioButton from '../../components/bits/radiobutton';

import Dots from '../../components/bits/dots';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';
//When did you start showing symptoms?

const Signup3 = props => {
  const onboardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();
  console.dir(onboardingState);

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

  const [hasExperience, setHasExperience] = useState(false);
  const onRadioButtonChange = val => {
    setHasExperience(val);
    console.log(val);
    dispatch(setProfessionalExperience(val));
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
  };

  return (
    <div className="signup3">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="signup3__wrapper">
        <div className="signup3__top">
          <span> Det er mange måter å hjelpe til på. Fortell oss litt om hva du kan og har erfaring med.</span>
        </div>
        <div className="signup3__content">
          <div className="signup3__field">
            <div className="signup3__field-headline">
              Hvordan vil du hjelpe til?
            </div>
            <div className="signup3__help">
              <div className="signup3__checkboxfield">
                <Checkbox
                  text="Omsorg"
                  caption="F.eks gå en tur eller ta en prat"
                  value={onboardingState.socialCare}
                  onChange={val => dispatch(setBasicSocialCare(val))}
                />
              </div>
              <div className="signup3__checkboxfield">
                <Checkbox
                  text="Daglige ærend"
                  caption="F.eks handle og levere mat og medisiner"
                  value={onboardingState.dailyChores}
                  onChange={val => dispatch(setDailyChores(val))}
                />
              </div>
            </div>
          </div>
          <div className="signup3__field">
            <div className="signup3__field-headline">
              Har du lappen?
            </div>
            <div className="signup3__radiofield">
              <RadioButton
                value={onboardingState.hasDriversLicense}
                text=""
                onChange={val => {
                  val ? dispatch(setHasDriversLicense(val))
                  :
                  dispatch(setHasDriversLicense(false));
                  updateLicenses("all", false);
                }}
              />
            </div>
            { onboardingState.hasDriversLicense ? <>
              <div className="signup3__field-headline">
                Hvilke(n) klasse?
              </div>
              <div className="signup3__licenses">
                <div className="signup4__checkboxes">
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Personbil (B)"
                      caption=""
                      value={onboardingState.driversLicenses.car}
                      onChange={val => updateLicenses("car", val)}
                    />
                  </div>
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Buss (D, DE)"
                      caption=""
                      value={onboardingState.driversLicenses.bus}
                      onChange={val => updateLicenses("bus", val)}
                    />
                  </div>
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Lastebil (C, CE)"
                      caption=""
                      value={onboardingState.driversLicenses.truck}
                      onChange={val => updateLicenses("truck", val)}
                    />
                  </div>
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Traktor (T)"
                      caption=""
                      value={onboardingState.driversLicenses.minibus}
                      onChange={val => updateLicenses("minibus", val)}
                    />
                  </div>
                </div>
              </div>
            </>
             : null
            }
          </div>
          <div className="signup3__field">
            <div className="signup3__field-headline">
              Har du arbeidserfaring?
            </div>
            <div className="signup3__radiofield">
              <RadioButton
                onChange={onRadioButtonChange}
                text=""
                value={onboardingState.professionalExperience}
              />
            </div>
            {hasExperience ? <>
              <div className="signup3__field-headline">
                Hva har du erfaring med?
              </div>
              <div className="signup3__default-professions">
                <div className="signup4__checkboxes">
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Sykepleier"
                      caption=""
                      // value={onboardingState.driversLicenses.minibus}
                      // onChange={val => {
                      //   val ? (
                      //     handleAddition.bind(this),
                      //     console.log(this)
                      //   )
                      //   : (handleDelete.bind(this))
                      // }}
                    />
                  </div>
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Lege"
                      caption=""
                      // value={onboardingState.driversLicenses.minibus}
                      // onChange={val => updateLicenses("minibus", val)}
                    />
                  </div>
                  <div className="signup3__checkboxfield">
                    <Checkbox
                      text="Vaktmester"
                      caption=""
                      // value={onboardingState.driversLicenses.minibus}
                      // onChange={val => updateLicenses("minibus", val)}
                    />
                  </div>
                </div>
              </div>
              <ReactTags
                tags={onboardingState.professionalExperiences}
                suggestions={suggestions}
                placeholder={'annen arbeidserfaring...'}
                handleDelete={handleDelete.bind(this)}
                handleAddition={handleAddition.bind(this)}
              />
            </>
            : null}
          </div>
          {/* radioResponse === 'yes' ? <FormField onChange={''} placeholderText="Admin, Psychologist, Trucker" /> : null */}

        </div>
        <div className="signup3__bottom">
          <Button text={'Neste'} light={false} link={'/signup/4'} />
          <div className="signup3__dots">
            <Dots active="2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup3;
