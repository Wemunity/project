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

const Signup5 = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();
  console.dir(onBoardingState);

  return (
    <div className="signup5">
      <img className="wemunity-icon" src={WemunityIconLight} alt="Ø" />
      <div className="signup5__wrapper">
        <div className="signup5__top">
          <img className="signup5__smiley" src={Smileyneutral} alt=":|" />
        </div>
        <div className="signup5__content">
          <div className="signup5__form">
            <div className="signup5__form-field">
              <DateField
                value={onBoardingState.symptomStartDate}
                onChange={e => dispatch(setSymptomStartDate(e))}
                lightText={true}
                topText={'Når begynte du å vise symptomer?'}
                arrow={true}
                date={true}
              />
            </div>
            <div className="signup5__form-field">
              <DateField
                value={onBoardingState.symptomEndDate}
                onChange={e => {dispatch(setSymptomEndDate(e))}}
                lightText={true}
                topText={'Når hadde du sist symptomer?'}
                arrow={true}
                date={true}
              />
            </div>
          </div>
        </div>
        <div className="signup5__bottom">
          <Button
            text={'Neste'}
            light={false}
            link={'/signup/52'}
          />
          <div className="signup5__dots">
            <Dots active="4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup5;

// <img className="signup5__corona-image" src={Coronapattern} alt="pattern"/>
