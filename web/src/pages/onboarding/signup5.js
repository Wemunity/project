import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setBasicSocialCare, setDailyChores, setProfessionalExperience, setProfessionalExperiences } from '../../state/onboarding';
import { experiences } from '../../config/professionalExperiences';

import ReactTags from 'react-tag-autocomplete'
import Button from '../../components/bits/button';
import Checkbox from '../../components/bits/checkbox';
import RadioButton from '../../components/bits/radiobutton';

import Dots from '../../components/bits/dots';

import WemunityIconDark from '../../assets/wemunity-icon-dark.svg';
//When did you start showing symptoms?


const Signup5 = props => {

  const [hasExperience, setHasExperience] = useState(false);
  const onRadioButtonChange = (val) => {
    setHasExperience(val);
    console.log(val);
    dispatch(setProfessionalExperience(val))
  }

  const onboardingState = useSelector(state => state.onboarding);
  const dispatch = useDispatch();

  console.dir(onboardingState);

  const suggestions = experiences;

  const handleDelete = (i) => {
    const ts = onboardingState.professionalExperiences.slice(0)
    ts.splice(i, 1)
    dispatch(setProfessionalExperiences(ts))
  }

  const handleAddition = (tag) => {
    const ts = [].concat(onboardingState.professionalExperiences, tag)
    dispatch(setProfessionalExperiences(ts))
  }

  return (
    <div className="signup5">
      <img className="wemunity-icon" src={WemunityIconDark} alt="Ø"/>
      <div className="signup5__wrapper">
        <div className="signup5__top">
          <span>There are many ways we all can contribute</span>
        </div>
        <div className="signup5__content">
          <div>
            <span><b>How do you want to help?</b></span><br/>
            <div className="signup5__checkboxfield">
              <Checkbox text="Basic social care" caption="Like visiting, calling someone, taking a walk" value={onboardingState.socialCare} onChange={(val) => dispatch(setBasicSocialCare(val))}/>
            </div>
            <div className="signup5__checkboxfield">
              <Checkbox text="Daily chores" caption="like grocery shopping, medicines, delivery etc" value={onboardingState.dailyChores} onChange={(val) => dispatch(setDailyChores(val))}/>
            </div>
          </div>
          <div className="signup5__radiofield">
            <RadioButton onChange={onRadioButtonChange} text="Do you have professional experience?" value={onboardingState.professionalExperience} />
            {
              hasExperience ? (
                <ReactTags
                  tags={onboardingState.professionalExperiences}
                  suggestions={suggestions}
                  placeholder={'Start typing...'}
                  handleDelete={handleDelete.bind(this)}
                  handleAddition={handleAddition.bind(this)} />)
              : null
            }
          </div>
          {/* radioResponse === 'yes' ? <FormField onChange={''} placeholderText="Admin, Psychologist, Trucker" /> : null */}
        </div>
        <div className="signup5__bottom">
          <Button text={'Finish'} light={false} link={'/welcome'}/>
          <div className="signup5__dots">
            <Dots active="4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup5;
