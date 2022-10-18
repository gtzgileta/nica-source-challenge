import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import SignIn from './SignIn';
import { loginUser } from '../../store/auth';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector((state) => state.Auth.error);
    const dispatch = useDispatch();
    const history = useHistory();

    const login = () => {
        const formValues = { email, password };
        dispatch(loginUser(formValues, () => {
            history.push("/videos");
        }));
    };

    return (
        <SignIn
            handleSubmit={login}
            formObj={{email, password}}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
        />
    );
}

export default Auth;