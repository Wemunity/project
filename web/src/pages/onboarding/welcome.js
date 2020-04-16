import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  setAgreeTerms
} from '../../state/onboarding';

import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import Terms from '../../components/bits/terms';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';

//Welcome

const Welcome = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();

  console.dir(onBoardingState);

  const [showTerms, setShowTerms] = useState(false);
  const handleShowTerms = name => {
    // console.log(name);
    setShowTerms(!showTerms);
  };

  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleValidation = () => {
    if (onBoardingState.agreeTerms) {
      setRedirect(<Redirect push to="/" />);
    } else {
      setErrors({
        ...errors,
        terms: 'You must accept the terms and conditions before continuing'
      });
    }
  };

  // useEffect(() => {
  //   if (!onBoardingState.agreeTerms) {
  //     setRedirect(<Redirect push to="/signup/2" />);
  //   }
  // }, [onBoardingState.agreeTerms]);

  return (
    <div className="welcome">
      {showTerms ? <Terms onClick={handleShowTerms} /> : null}
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø"/>
      <div className="welcome__wrapper">
        <div className="welcome__top">
          <h4>Welcome, {onBoardingState.name}</h4>
          <span>You are number <b>XXXX</b> to sign up globally</span><br/>
          <span>& you are number <b>XXXX</b> to sign up in Norway</span>
        </div>
        <div className="welcome__content"></div>
        <div className="welcome__bottom">
          <div className="welcome__profileimage">
            { onBoardingState.picture ?
              <img src={onBoardingState.picture} alt=""/>
              : null
            }
          </div>
          <div className="welcome__terms">
            <div>
              <Checkbox
                value={onBoardingState.agreeTerms}
                onChange={val => dispatch(setAgreeTerms(val))}
                text={'I agree to the'}
                caption=" "
              />
            </div>
            <span onClick={handleShowTerms}>
              &nbsp;<button>terms and conditions</button>
            </span>
          </div>
          {errors.terms && !onBoardingState.agreeTerms && (
            <span className="welcome__error">{errors.terms}</span>
          )}

          <div className="welcome__caption"><span><b>Together we will beat this!</b></span></div>
          <Button
            text={'Explore tasks'}
            light={false}
            link={'/'}
            arrow={true}
            handleValidation={handleValidation}
          />
        </div>
      </div>
      { redirect }
    </div>
  );
};

export default Welcome;
