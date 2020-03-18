import React from 'react';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';

const SocialModule = () => {
  return (
    <div className="module social-module">
      <div className="social-module__content">
        <h2 className="social-module__title">An open innovation project</h2>
        <p className="social-module__text">
          Collaborative and open source. Get involved!
        </p>
        <div className="social-module__buttons">
          <button className="social-module__button social-module__button--blue">
            <span>
              Wemunity on facebook <img src={facebook} alt="facebook" />
            </span>
          </button>
          <button className="social-module__button social-module__button--grey">
            <span>
              Wemunity on github <img src={github} alt="github" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialModule;
