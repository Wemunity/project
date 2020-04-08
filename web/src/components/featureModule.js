import React from 'react';

import Feature from './bits/feature';

const FeatureModule = props => {
  return (
    <div className="module feature-module">
      <div className="feature-module__content">
        {props.m &&
          props.m.features.map(f => <Feature key={f._key} feature={f} />)}
      </div>
    </div>
  );
};

export default FeatureModule;
