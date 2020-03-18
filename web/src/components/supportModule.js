import React from 'react';
import newLogo from '../assets/new.svg';
import deloitteLogo from '../assets/deloitte.svg';
import nybyLogo from '../assets/nyby.svg';
import sanityLogo from '../assets/sanity.svg';
import nabohjelpLogo from '../assets/nabohjelp.svg';

const SupportModule = () => {
  return (
    <div className="module support-module">
      <div className="support-module__content">
        <h1 className="support-module__title">Support the project</h1>
        <p className="support-module__text">
          We need technical skills, domain knowledge and funding. These
          companies supports the project
        </p>
        <div className="support-module__collaborators">
          <img src={newLogo} alt="NEW logo" />
          <img src={deloitteLogo} alt="Deloitte logo" />
        </div>
      </div>
    </div>
  );
};

export default SupportModule;
