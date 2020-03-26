import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../../components/bits/button';

//Welcome

const Welcome = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!onBoardingState.agreeTerms) {
      setRedirect(<Redirect push to="/signup/2" />);
    }
  }, [onBoardingState.agreeTerms]);
  return (
    <div className="welcome">
      <div className="welcome__wrapper">
        <div className="welcome__top">
          <h4>Welcome, person</h4>
          <span>
            You are number <b>XXXX</b> to sign up globally
          </span>
          <br />
          <span>
            & you are number <b>XXXX</b> to sign up in Norway
          </span>
        </div>
        <div className="welcome__content"></div>
        <div className="welcome__bottom">
          <div className="welcome__profileimage"></div>
          <div className="welcome__caption">
            <span>
              <b>Together we will beat this!</b>
            </span>
          </div>
          <Button
            text={'Explore tasks'}
            light={false}
            link={'/tasks'}
            arrow={true}
          />
        </div>
      </div>
      {redirect}
    </div>
  );
};

export default Welcome;
