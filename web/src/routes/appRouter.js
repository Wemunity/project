import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/landingPage.js';
import Signup from '../pages/onboarding/signup';
import Signup1 from '../pages/onboarding/signup1';
import Signup2 from '../pages/onboarding/signup2';
import Signup3 from '../pages/onboarding/signup3';
import Signup4 from '../pages/onboarding/signup4';
import Signup5 from '../pages/onboarding/signup5';
import Signup52 from '../pages/onboarding/signup52';
import Welcome from '../pages/onboarding/welcome';
import Profile from '../pages/profile';
import Tasks from '../pages/tasks';
import PressPage from '../pages/pressPage.js';
import About from '../pages/about.js';
import Story from '../pages/story.js';
import Platform from '../pages/platform.js';
import GridPage from '../pages/gridPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/signup/1" component={Signup1} exact={true} />
        <Route path="/signup/2" component={Signup2} exact={true} />
        <Route path="/signup/3" component={Signup3} exact={true} />
        <Route path="/signup/4" component={Signup4} exact={true} />
        <Route path="/signup/5" component={Signup5} exact={true} />
        <Route path="/signup/52" component={Signup52} exact={true} />
        <Route path="/welcome" component={Welcome} exact={true} />
        <Route path="/tasks" component={Tasks} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/press" component={PressPage} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/story" component={Story} exact={true} />
        <Route path="/platform" component={Platform} exact={true} />
        <Route path="/grid" component={GridPage} exact={true} />

      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
