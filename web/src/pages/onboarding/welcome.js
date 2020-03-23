import React from 'react';

import Button from '../../components/bits/button';

//Welcome

const Welcome = props => {
  return (
    <div className="signup5">
      <div className="signup5__wrapper">
        <div className="signup5__top">
          <span>There are many ways we all can contribute</span>
        </div>
        <div className="signup5__content">
        </div>
        <div className="signup5__bottom">
          <Button text={'Finish'} light={false} link={'/welcome'}/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
