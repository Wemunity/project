import React, { useState } from 'react';
import Button from '../../components/bits/button';
import Dots from '../../components/bits/dots';
import ImmunityExplanation from '../../components/bits/immunityExplanation';

import Smileysmile from '../../assets/smiley_smile.svg';
import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';

const Signup3 = props => {

  const [showExplanation, setShowExplanation] = useState(false);

  const handleShowExplanation = (name) => {
    // console.log(name);
    console.log(showExplanation);
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="signup3">
    <img className="wemunity-icon" src={WemunityIconDark} alt="Ø"/>
      <div className="signup3__wrapper">
        <div className="signup3__top">
          <img className="signup3__smiley" src={Smileysmile} alt=":|"/>
        </div>
        <div className="signup3__content">
          <span><b>You are most likely immune:<br/></b>We will notify you when we have verified your immunity at a hospital</span>
          <div className="signup3__explanation">
            <h1>!</h1>
            <span onClick={handleShowExplanation}><b>What does it mean to have verified immunity?</b></span>
          </div>
          {showExplanation ? <ImmunityExplanation onClick={handleShowExplanation}/> : null}
        </div>
        <div className="signup3__bottom">
          <Button text={'Next'} light={false} link={'/signup/4'}/>
          <div className="signup3__dots">
            <Dots active="2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup3;
