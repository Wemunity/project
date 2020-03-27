import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../../components/bits/button';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';

//Welcome

const Welcome = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  const [redirect, setRedirect] = useState(null);
  
  console.dir(onBoardingState);

  useEffect(() => {
    if (!onBoardingState.agreeTerms) {
      setRedirect(<Redirect push to="/signup/2" />);
    }
  }, [onBoardingState.agreeTerms]);

  return (
    <div className="welcome">
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

          <div className="welcome__caption"><span><b>Together we will beat this!</b></span></div>
          <Button text={'Explore tasks'} light={false} link={'/'} arrow={true}/>
        </div>
      </div>
      {redirect}
    </div>
  );
};

export default Welcome;
