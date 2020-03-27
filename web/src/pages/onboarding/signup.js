import React from 'react';
import Button from '../../components/bits/button';

import WemunityIconLight from '../../assets/wemunity-icon-light.svg';
import WemunityLogoText from '../../assets/wemunity-project-logo-text.svg';


//log in or sign up

const Signup = props => {
  return (
    <div className="signup">
      <div className="signup__wrapper">
        <div className="signup__content">
          <img className="signup__logo-icon" src={WemunityIconLight} alt="ø"/>
          <img className="signup__logo-text" src={WemunityLogoText} alt="Wemunity project"/>
          <div className="signup__buttons">
            <div className="signup__button">
              <Button
                text={'Start'}
                light={false}
                link={'/signup/1'}
              />
            </div>
          </div>
        </div>
        <div className="signup__bottom">

        </div>
      </div>
    </div>
  );
};

export default Signup;
