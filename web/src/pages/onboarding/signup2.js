import React, { useState } from 'react';
import Coronapattern from '../../assets/corona_pattern.svg';
import DateField from '../../components/bits/datefield';
import Smileyneutral from '../../assets/smiley_neutral.svg';
import Dots1 from '../../assets/dots1.svg';

import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import Terms from '../../components/bits/terms';
//When did you start showing symptoms?

const Signup2 = props => {

  const [showTerms, setShowTerms] = useState(false);

  const handleShowTerms = (name) => {
    // console.log(name);
    setShowTerms(!showTerms);
  };

  const onDateChange = (date) => {
    console.log(date);
  }

  return (
    <div className="signup2">
      <div className="signup2__wrapper">
        <div className="signup2__top">
          <img className="signup2__corona-image" src={Coronapattern} alt="pattern"/>
          <img className="signup2__smiley" src={Smileyneutral} alt=":|"/>
        </div>
        <div className="signup2__content">
          <div className="signup2__form">
            <div className="signup2__form-field">
              <DateField onChange={onDateChange} lightText={true} topText={'When did you start showing symptoms?'} placeholderText={'01-01-1337'} arrow={true} date={true}/>
            </div>
            <div className="signup2__form-field">
              <DateField onChange={onDateChange} lightText={true} topText={'When did you last show symptoms?'} placeholderText={'01-01-1337'} arrow={true} date={true}/>
            </div>
          </div>
          <div className="signup2__terms">
            <div onClick={handleShowTerms}>
              <Checkbox text={'I agree to the terms and conditions'} caption=" "/>
            </div>
            {showTerms ? <Terms onClick={handleShowTerms}/> : null}
          </div>
        </div>
        <div className="signup2__bottom">
          <Button text={'Next'} light={false} link={'/signup/3'}/>
          <img className="signup2__dots" src={Dots1} alt="- * * *"/>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
