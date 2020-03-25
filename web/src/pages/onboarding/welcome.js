import React from 'react';

import Button from '../../components/bits/button';

//Welcome

const Welcome = props => {
  return (
    <div className="welcome">
      <div className="welcome__wrapper">
        <div className="welcome__top">
          <h4>Welcome, person</h4>
          <span>You are number <b>XXXX</b> to sign up globally</span><br/>
          <span>& you are number <b>XXXX</b> to sign up in Norway</span>
        </div>
        <div className="welcome__content">
        </div>
        <div className="welcome__bottom">
          <div className="welcome__profileimage"></div>
          <div className="welcome__caption"><span><b>Together we will beat this!</b></span></div>
          <Button text={'Explore tasks'} light={false} link={'/tasks'} arrow={true}/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
