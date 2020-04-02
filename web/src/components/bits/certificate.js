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

  const determineCertificateText = (val) => {
    if (val === 1) {
      let certificateText1 = 'You have tested positive for antibodies by ';
      let hospital = 'vestre sykehus at 06.04.2020'
      let certificateText2 = '. This will most likely give immunity.';
      let certificateText3 = 'Immunity is issued on the background of completed blood samples and adequate time in quarantine. ';
      let certificateText4 = 'Get more info.'
      return <span>{certificateText1}<a href={'http://google.com/search?q='+hospital}>{hospital}</a>{certificateText2}<br/><br/>{certificateText3}<a href={'http://google.com/search?q='+certificateText4}>{certificateText4}</a></span>
    }
    else if (val === 0) {
      let certificateText1 = 'You are pending immunity by ';
      let hospital = 'vestre sykehus'
      let certificateText2 = 'Immunity is issued on the background of completed blood samples and adequate time in quarantine. ';
      let certificateText3 = 'Get more info.'
      return <span>{certificateText1}<a href={'http://google.com/search?q='+hospital}>{hospital}</a><br/><br/>{certificateText2}<a href={'http://google.com/search?q='+certificateText3}>{certificateText3}</a></span>

    }
    else {
      let certificateText1 = 'You have been labeled not immune.';
      let certificateText2 = 'How can I become immune?';
      return <span>{certificateText1}<br/><br/><a href={'http://google.com/search?q=how to become immune covid-19'}>{certificateText2}</a></span>
    }

  }

  const [ expandBox, setExpandBox ] = useState(false);

  const handleExpandBox = () => {
    setExpandBox(!expandBox);
    const button = document.getElementById('expandbutton');
    const content = document.getElementById('content');
    console.log(content);
    if (expandBox) {
      button.style.transform = 'rotate(90deg)'
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      content.style.padding = '0 0';
    }
    else {
      button.style.transform = 'rotate(270deg)';
      content.style.maxHeight = '300px';
      content.style.opacity = '1';
      content.style.padding = '25px 0';
    }
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
            { determineCertificateText(props.immunityStatus) }
          </div>
          <div onClick={handleExpandBox} id="expandbutton" className="certificate__expand-button"></div>
      </div>
    </div>
  );
};

export default Certificate;
