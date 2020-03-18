import React from 'react';
import appIcon from '../assets/app_icon.svg';
import apiIcon from '../assets/api_icon.svg';
import crossIcon from '../assets/cross_icon.svg';
import searchIcon from '../assets/search_icon.svg';

const FeatureModule = () => {
  return (
    <div className="module feature-module">
      <div className="feature-module__content">
        <div className="feature-module__feature">
          <img className="feature-module__image" src={appIcon} alt="app" />
          <h4 className="feature-module__heading">Register after recovery</h4>
          <p className="feature-module__text">
            A friendly service where recovered patients can volunteer to
            different tasks.
          </p>
        </div>
        <div className="feature-module__feature">
          <img className="feature-module__image" src={crossIcon} alt="Cross" />
          <h4 className="feature-module__heading">Medical clearing</h4>
          <p className="feature-module__text">
            A system where dedicated health professionals can validate immunity
            and clear helpers.
          </p>
        </div>
        <div className="feature-module__feature">
          <img
            className="feature-module__image"
            src={searchIcon}
            alt="Search"
          />
          <h4 className="feature-module__heading">Search & find helpers</h4>
          <p className="feature-module__text">
            An interface where authorized public organisations can search and
            find immunized citizens.
          </p>
        </div>
        <div className="feature-module__feature">
          <img
            className="feature-module__image"
            src={apiIcon}
            alt="Third party"
          />
          <h4 className="feature-module__heading">Third party</h4>
          <p className="feature-module__text">
            An API where the immune can be made available for third party
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureModule;
