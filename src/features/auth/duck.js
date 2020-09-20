import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';
const GET_SESSION = 'AUTH/GET_SESSION';
const CHANGE_STUDNO = 'AUTH/CHANGE_STUDNO';
const CHANGE_PASSWORD = 'AUTH/CHANGE_PASSWORD';

export const login = credentials => {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      promise: Api.login(credentials)
    });
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    promise: Api.logout()
  };
};

export const getSession = () => {
  return dispatch => {
    return dispatch({
      type: GET_SESSION,
      promise: Api.getSession()
    });
  };
};

export const changeStudNo = username => {
  return {
    type: CHANGE_STUDNO,
    payload: username
  };
};

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    payload: password
  };
};

// Initial State
const initialState = {
  isFetchingUser: false,
  isLoggingIn: false,
  hasTriedLoggingIn: false,

  studNo: '',
  password: '',
  user: null
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoggingIn: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data,
          studNo: '',
          password: ''
        }),
        failure: prevState => ({
          ...prevState,
          hasTriedLoggingIn: true
        }),
        finish: prevState => ({
          ...prevState,
          isLoggingIn: false
        })
      });

    case LOGOUT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoggingOut: true
        }),
        success: prevState => ({
          ...prevState,
          user: null,
          hasTriedLoggingIn: false
        }),
        finish: prevState => ({
          ...prevState,
          isLoggingOut: false
        })
      });

    case GET_SESSION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isFetchingUser: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isFetchingUser: false
        })
      });

    case CHANGE_STUDNO:
      return {
        ...state,
        studNo: payload
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload
      };

    default:
      return state;
  }
};

export default reducer;
