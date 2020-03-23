import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/landingPage.js';
import Signup1 from '../pages/onboarding/signup1';
import Signup2 from '../pages/onboarding/signup2';
import Signup3 from '../pages/onboarding/signup3';
import Signup4 from '../pages/onboarding/signup4';
import Signup5 from '../pages/onboarding/signup5';
import Welcome from '../pages/onboarding/welcome';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/signup/1" component={Signup1} exact={true} />
        <Route path="/signup/2" component={Signup2} exact={true} />
        <Route path="/signup/3" component={Signup3} exact={true} />
        <Route path="/signup/4" component={Signup4} exact={true} />
        <Route path="/signup/5" component={Signup5} exact={true} />
        <Route path="/welcome" component={Welcome} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
