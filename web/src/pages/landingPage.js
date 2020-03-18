import React from 'react';
import IntroModule from '../components/introModule.js';
import '../styles/app.scss';
import SocialModule from '../components/socialModule.js';
import FeatureModule from '../components/featureModule.js';
import SupportModule from '../components/supportModule.js';
import Footer from '../components/footer.js';

function LandingPage() {
  return (
    <div className="App">
      <IntroModule />
      <SocialModule />
      <FeatureModule />
      <SupportModule />
      <Footer />
    </div>
  );
}

export default LandingPage;
