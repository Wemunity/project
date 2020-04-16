import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Button from '../../components/bits/button';
import Dots from '../../components/bits/dots';
import ImmunityExplanation from '../../components/bits/immunityExplanation';

import Smileysmile from '../../assets/smiley_smile.svg';
import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';


const Signup52 = props => {
  const onBoardingState = useSelector(state => state.onboarding);
  // const [redirect, setRedirect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleShowExplanation = name => {
    // console.log(name);
    console.log(showExplanation);
    setShowExplanation(!showExplanation);
  };

  // useEffect(() => {
  //   if (!onBoardingState.agreeTerms) {
  //     setRedirect(<Redirect push to="/signup/2" />);
  //   }
  // }, [onBoardingState.agreeTerms]);

  return (
    <div className="signup52">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø" />
      <div className="signup52__wrapper">
        <div className="signup52__top">
          <img className="signup52__smiley" src={Smileysmile} alt=":|" />
        </div>
        <div className="signup52__content">
          <span>
            <b>
              Det kan godt hende du er immun:
              <br />
            </b>
            Vi kommer til å kalle deg inn og siden sender vi deg en notifikasjon når vi har verfisert din status med helsepersonell.
          </span>
          <div className="signup52__explanation">
            <h1>!</h1>
            <span onClick={handleShowExplanation}>
              <b>Hva betyr det å være immun?</b>
            </span>
          </div>
          {showExplanation ? (
            <ImmunityExplanation onClick={handleShowExplanation} />
          ) : null}
        </div>
        <div className="signup52__bottom">
          <Button text={'Ferdig'} light={false} link={'/welcome'} />
          <div className="signup52__dots">
            <Dots active="4" />
          </div>
        </div>
      </div>
      {/*{redirect}*/}
    </div>
  );
};

export default Signup52;
