import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../../store/auth';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    history.listen(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            const decodedJwt = parseJwt(token);
            if (decodedJwt.exp * 1000 < Date.now()) {
                dispatch(logout(() => {
                    history.push("/");
                }))
            }
        }
    });

    return <div></div>;
};

export default withRouter(AuthVerify);