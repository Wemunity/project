import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSymptomStartDate,
  setSymptomEndDate,
  setAgreeTerms
} from '../../state/onboarding';

import DateField from '../../components/bits/datefield';
import Dots from '../../components/bits/dots';
import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import Terms from '../../components/bits/terms';

import Smileyneutral from '../../assets/smiley_neutral.svg';
import WemunityIconLight from '../../assets/wemunity-icon-light.svg';

const Signup2 = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();
  const [showTerms, setShowTerms] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleShowTerms = name => {
    // console.log(name);
    setShowTerms(!showTerms);
  };

  const onDateChange = date => {
    console.log(date);
  };

  const handleValidation = () => {
    if (onBoardingState.agreeTerms) {
      setRedirect(<Redirect push to="/signup/3" />);
    } else {
      setErrors({
        ...errors,
        terms: 'You must accept the terms and conditions before continuing'
      });
    }
  };

  return (
    <div className="signup2">
      <img className="wemunity-icon" src={WemunityIconLight} alt="Ø" />
      <div className="signup2__wrapper">
        {errors.terms && !onBoardingState.agreeTerms && (
          <span className="signup2__error">{errors.terms}</span>
        )}
        <div className="signup2__top">
          <img className="signup2__smiley" src={Smileyneutral} alt=":|" />
        </div>
        <div className="signup2__content">
          <div className="signup2__form">
            <div className="signup2__form-field">
              <DateField
                value={onBoardingState.symptomStartDate}
                onChange={e => dispatch(setSymptomStartDate(e))}
                lightText={true}
                topText={'When did you start showing symptoms?'}
                arrow={true}
                date={true}
              />
            </div>
            <div className="signup2__form-field">
              <DateField
                value={onBoardingState.symptomEndDate}
                onChange={e => dispatch(setSymptomEndDate(e))}
                lightText={true}
                topText={'When did you last show symptoms?'}
                arrow={true}
                date={true}
              />
            </div>
          </div>
          <div className="signup2__terms">
            <div>
              <Checkbox
                value={onBoardingState.agreeTerms}
                onChange={val => dispatch(setAgreeTerms(val))}
                text={'I agree to the'}
                caption=" "
              />
            </div>
            <span onClick={handleShowTerms}>
              &nbsp;<a>terms and conditions</a>
            </span>
            {showTerms ? <Terms onClick={handleShowTerms} /> : null}
          </div>
        </div>
        <div className="signup2__bottom">
          <Button
            text={'Next'}
            light={false}
            link={'/signup/3'}
            handleValidation={handleValidation}
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

// <img className="signup2__corona-image" src={Coronapattern} alt="pattern"/>
