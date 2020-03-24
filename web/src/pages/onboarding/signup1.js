import React from 'react';
import Button from '../../components/bits/button';
import Bankid from '../../assets/bankid-logo.png';
//log in or sign up

const Signup1 = props => {
  return (
    <div className="signup1">
      <div className="signup1__wrapper">
        <div className="signup1__content">
          <img className="bankid" src={Bankid} alt="BankID"/>
          <div className="signup1__buttons">
            <div className="signup1__button">
              <Button text={'Sign up'} light={false} link={'/signup/2'} arrow={true}/>
            </div>
            <div className="signup1__button">
              <Button text={'Sign in'} light={true} link={'/signup/2'} arrow={true}/>
            </div>
          </div>
        </div>
        <div className="signup1__bottom">
            <span style={{fontSize:'11px'}}><b>New user? Sign up here</b></span><br/>
            <span style={{fontSize:'10px'}}>By creating an account, you agree to our <br/>Terms of Service and Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
