import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LayoutRoute from "./modules/SiteLayout";
import SignIn from "./modules/SignIn";
import SignUp from "./modules/SignUp";
import Videos from "./modules/Videos";
import Profile from "./modules/Profile";

const browserHistory = createBrowserHistory();

export const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <LayoutRoute exact path="/" component={SignIn} />
      <LayoutRoute exact path="/signup" component={SignUp} />

      {/* ADMIN ROUTES */ }
      <LayoutRoute exact path="/videos" component={ Videos } authRoute />
      <LayoutRoute exact path="/profile/:id" component={ Profile } authRoute />
      {/* <LayoutRoute exact path="/videos/:id" component={ VideoDetail } authRoute /> */}
    </Switch>
  </Router>
);
