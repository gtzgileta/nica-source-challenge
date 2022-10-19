import axios from 'axios';

// ACTION TYPES
const USER_LOADING = 'USER_LOADING';
const USER_LOADED = 'USER_LOADED';

// REDUCER
const initialState = {
    profile: null,
    loading: false,
};

// ACTION CREATORS
export const loadProfile = (id) => async dispatch => {
    dispatch({ type: USER_LOADING });
    try {
      const res = await axios.get(`${ process.env.REACT_APP_API_URL }/user/load`, {
        params: {
          id
        }
      });
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } catch (e) {
      dispatch({ type: USER_LOADING });
    }
};
  
  
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
              return {
                  ...state,
                  loading: false,
                  profile: payload,
              };
          case USER_LOADING:
              // Store for later use in headers
              return {
                ...state,
                ...payload,
                profile: null,
                loading: false,
              };
          default:
              return state;
    }
  }