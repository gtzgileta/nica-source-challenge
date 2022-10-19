import React from "react";
import { Route, withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthVerify from "../components/AuthVerify/AuthVerify";
import { loadUser } from '../store/auth';
import { isLoggedIn } from '../utils/auth-util';
import "./global.scss";

const LayoutRoute = ({ component: Component, authRoute, ...rest }) => {
  const history = useHistory();
  const loggedIn = isLoggedIn();
  const dispatch = useDispatch();

  // Redirect to login if user not logged in
  if (!loggedIn && authRoute) history.push("/");
  if (loggedIn && !authRoute) history.push('/videos');

  if (!authRoute) return <Component { ...rest } />;

  // Logged in, load user data
  dispatch(loadUser());

  const panel = (
    <React.Fragment>
      <Header />
      <Component {...rest} />
      <Footer />
      <AuthVerify/>
    </React.Fragment>
  );

  // Return React Router's route with render function
  return <Route render={() => panel} {...rest} />;
};

export default withRouter(LayoutRoute);
