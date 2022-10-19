import axios from 'axios';

// ACTION TYPES
const VIDEO_LOADING = 'VIDEO_LOADING';
const VIDEO_LOADED = 'VIDEO_LOADED';
const VIDEO_ADD_SUCCESS = 'VIDEO_ADD_SUCCESS';
const VIDEO_ADD_FAILED = 'VIDEO_ADD_FAILED';

const configHeader = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem('token'),
    },
};

// REDUCER
const initialState = {
    videos: null,
    loading: false,
};

// ACTION CREATORS
export const loadVideos = () => async dispatch => {
    dispatch({ type: VIDEO_LOADING, payload: true });
    try {
      const res = await axios.get(`${ process.env.REACT_APP_API_URL }/video/all`, configHeader);
      dispatch({
        type: VIDEO_LOADED,
        payload: res.data.videos,
      });
    } catch (e) {
      dispatch({ type: VIDEO_LOADING, payload: false });
    }
};

export const loadVideo = (id) => async dispatch => {
    dispatch({ type: VIDEO_LOADING, payload: true });
    try {
      const res = await axios.get(`${ process.env.REACT_APP_API_URL }/video/load`, {
        params: {
          id
        }
      });
      dispatch({
        type: VIDEO_LOADED,
        payload: res.data.videos,
      });
    } catch (e) {
      dispatch({ type: VIDEO_LOADING, payload: false });
    }
};

export const addVideo = (values, callback) => async dispatch => {
    const body = JSON.stringify({ ...values });
  
    try {
      const res = await axios.post(`${ process.env.REACT_APP_API_URL }/video/add`, body, configHeader);
      dispatch({
        type: VIDEO_ADD_SUCCESS,
        payload: res.data,
      });
      // Load User Data
      dispatch(loadVideos());
      // Run callback if available
      callback();
    } catch (error) {
      dispatch({ type: VIDEO_ADD_FAILED, payload: error.message });
      // dispatch(getCart());
    }
};
  
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case VIDEO_LOADED:
              return {
                  ...state,
                  loading: false,
                  videos: payload,
              };
          case VIDEO_LOADING:
              // Store for later use in headers
              return {
                ...state,
                ...payload,
                VIDEOS: null,
                loading: false,
              };
          default:
              return state;
    }
  }