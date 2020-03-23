import React from 'react';
import Coronapattern from '../../assets/corona_pattern.svg';
import FormField from '../../components/bits/formfield';
import Smileyneutral from '../../assets/smiley_neutral.svg';
import Dots1 from '../../assets/dots1.svg';

import Button from '../../components/bits/button';
//When did you start showing symptoms?

const Signup2 = props => {
  return (
    <div className="signup2">
      <div className="signup2__top">
        <img className="signup2__corona-image" src={Coronapattern} alt="pattern"/>
        <img className="signup2__smiley" src={Smileyneutral} alt=":|"/>
      </div>
      <div className="signup2__content">
        <div className="signup2__form">
          <div className="signup2__form-field">
            <FormField lightText={true} topText={'When did you start showing symptoms?'} placeholderText={'01-01-1337'} arrow={true}/>
          </div>
          <div className="signup2__form-field">
            <FormField lightText={true} topText={'When did you last show symptoms?'} placeholderText={'01-01-1337'} arrow={true}/>
          </div>
        </div>
      </div>
      <div className="signup2__bottom">
        <Button text={'Next'} light={false} link={'/signup/3'}/>
        <img className="signup2__dots" src={Dots1} alt="- * * *"/>
      </div>
    </div>
  );
};

export default Signup2;
