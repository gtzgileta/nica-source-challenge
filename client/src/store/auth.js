import axios from 'axios';
import { getUser, isLoggedIn, loginUtil, logoutUtil } from '../utils/auth-util';

// ACTION TYPES
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
const USER_LOADED = 'USER_LOADED';
const AUTH_ERROR = 'AUTH_ERROR';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';

// REDUCER
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null
};

const configHeader = {
    headers: {
        "Content-Type": "application/json",
    },
};

// ACTION CREATORS

export const register = (values, callback) => async (dispatch) => {
    const body = JSON.stringify({ ...values });
  
    try {
      const res = await axios.post(`${ process.env.REACT_APP_API_URL }/auth/register`, body, configHeader);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
      // Load User Data
      dispatch(loadUser());
      // Run callback if available
      callback();
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
      // dispatch(getCart());
    }
  };
  
  export const loginUser = (values, callback) => async (dispatch) => {
  
    const body = JSON.stringify({ ...values });
  
    try {
      const res = await axios.post(`${ process.env.REACT_APP_API_URL }/auth/login`, body, configHeader);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      // Load User Data
      loginUtil(res.data.user, res.data.accessToken)
      dispatch(loadUser());
      // Run callback if available
      callback();
    } catch (e) {
      dispatch({ type: USER_LOGIN_FAIL });
    }
  };
  
  // Logout - Clear Profile
  export const logout = (callback) => dispatch => {
    logoutUtil();
    dispatch({ type: USER_LOGOUT });
    callback();
  };
  
  export const loadUser = () => async dispatch => {
    if (isLoggedIn() === false) {
      return false;
    }
    try {
      const user = JSON.parse(getUser())[0];
      const res = await axios.get(`${ process.env.REACT_APP_API_URL }/user/load`, {
        params: {
          id: user.id
        }
      });
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } catch (e) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  
  
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
              return {
                  ...state,
                  isAuthenticated: true,
                  loading: false,
                  user: payload,
              };
          case USER_REGISTER_SUCCESS:
              // Store for later use in headers
              // localStorage.setItem('token', payload.token);
              return {
                ...state,
                ...payload,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
              };
          case USER_LOGIN_SUCCESS:
              // Store for later use in headers
              return {
                  ...state,
                  token: payload.accessToken,
                  user: payload.user,
                  isAuthenticated: true,
                  loading: false,
              };
          case USER_REGISTER_FAIL:
            return {
                ...state,
                ...payload,
                error: payload,
                loading: false,
            };
            break;
          case AUTH_ERROR:
          case USER_LOGIN_FAIL:
          case USER_LOGOUT:
              delete axios.defaults.headers.common['Authorization'];
              return {
                  ...state,
                  token: null,
                  isAuthenticated: false,
                  loading: false,
                  user: null,
              };
          default:
              return state;
    }
  }