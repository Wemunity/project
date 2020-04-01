import React, { useState } from 'react';

import CertificateIconApproved from '../../assets/certificate-icon-approved.svg';
import CertificateIconPending from '../../assets/certificate-icon-pending.svg';
import CertificateIconDeclined from '../../assets/certificate-icon-declined.svg';



const Certificate = props => {

  // const immunityStatus = 1; // 0: pending, 1: approved, -1: declined
  const determineImmunityStatus = (val) => {
    if (val === 1) {
      return  <img src={CertificateIconApproved} alt=":)" />
    }
    else if (val === 0) {
      return <img src={CertificateIconPending} alt=":|" />
    }
    else {
      return <img src={CertificateIconDeclined} alt=":(" />
    }
  }

  const [ expandBox, setExpandBox ] = useState(false);

  const handleExpandBox = () => {
    setExpandBox(!expandBox);
    const button = document.getElementById('expandbutton');
    expandBox ? button.style.transform = 'rotate(90deg)' : button.style.transform = 'rotate(270deg)';
    const content = document.getElementById('content');
    if (expandBox) {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.style.padding = '0 0';
    }
    else {
        content.style.maxHeight = '300px';
        content.style.opacity = '1';
        content.style.padding = '25px 0';
    }

    // if (expandBox) {
    //   document.getElementById('content').animate({height:'auto'})
    // }
  }

  return (
    <div className="certificate">
      <div className="certificate__wrapper">
        <div className="certificate__top">
          { determineImmunityStatus(props.immunityStatus) }
          <div className="certificate__text">
            <div className="certificate__text-title">Certificate of immunity</div>
            <div className="certificate__text-name">Farao Frisk</div>

          </div>
        </div>
          <div id={"content"} className="certificate__content">
            <span>Farao frisk is pending immunity by vestre sykehus <br/><br/>
            Immunity is issued on the background of completed blood samples and adequate time in quarantine
            </span>
          </div>
          <div onClick={handleExpandBox} id="expandbutton" className="certificate__expand-button"></div>
      </div>
    </div>
  );
};

export default Certificate;
