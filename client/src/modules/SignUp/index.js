import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import SignUp from './SignUp';
import { register, loginUser } from '../../store/auth';
import { validateSignUp } from '../../utils/validate-util';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const registerUser = () => {
        const formValues = { first_name: name, last_name: lastName, email, password, role };
        const validateSignUpResult = validateSignUp(formValues)
        if (validateSignUpResult === 'valid') {
            dispatch(register(formValues, () => {
                dispatch(loginUser(formValues, () => {
                    history.push("/videos");
                }));
            }));
        } else {
            setError(validateSignUpResult);
        }
    };

    return (
        <SignUp
            handleSubmit={registerUser}
            formObj={{email, password, name, lastName, role}}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
            setLastName={setLastName}
            setRole={setRole}
            error={error}
        />
    );
}

export default Auth;