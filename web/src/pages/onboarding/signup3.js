import React from 'react';
import Button from '../../components/bits/button';

import CoronapatternDark from '../../assets/corona_pattern_dark.svg';
import Smileysmile from '../../assets/smiley_smile.svg';
import Dots2 from '../../assets/dots2.svg';



//When did you start showing symptoms?

const Signup3 = props => {
  return (
    <div className="signup3">
      <div className="signup3__top">
        <img className="signup3__corona-image" src={CoronapatternDark} alt="pattern"/>
        <img className="signup3__smiley" src={Smileysmile} alt=":|"/>
      </div>
      <div className="signup3__content">
        <span ><b>You are most likely immune:<br/></b>We will notify you when we have verified your immunity at a hospital</span>

      </div>
      <div className="signup3__bottom">
        <Button text={'Next'} light={false} link={'/signup/4'}/>
        <img className="signup3__dots" src={Dots2} alt="- * * *"/>
      </div>
    </div>
  );
};

export default Signup3;
