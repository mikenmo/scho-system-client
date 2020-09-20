import * as Api from '../../api';
import { handle } from 'redux-pack';

const GET_BABIES = 'SCHOPOINTS/GET_BABIES';

const RESET_ALL_POINTS = 'SCHOPOINTS/RESET_ALL_POINTS';
const RESET_POINTS = 'SCHOPOINTS/RESET_POINTS';

const ADD_POINTS = 'SCHOPOINTS/ADD_POINTS';
const SUBTRACT_POINTS = 'SCHOPOINTS/SUBTRACT_POINTS';
const CHANGE_POINTS = 'SCHOPOINTS/CHANGE_POINTS';

export const getBabies = id => {
  return {
    type: GET_BABIES,
    promise: Api.getBabies(id)
  };
};

export const resetAllPoints = id => {
  return {
    type: RESET_ALL_POINTS,
    promise: Api.resetAllPoints(id)
  };
};

export const resetPoints = id => {
  return {
    type: RESET_POINTS,
    promise: Api.resetPoints(id)
  };
};

export const addPoints = details => {
  return {
    type: ADD_POINTS,
    promise: Api.addPoints(details)
  };
};

export const subtractPoints = details => {
  return {
    type: SUBTRACT_POINTS,
    promise: Api.subtractPoints(details)
  };
};

export const changePoints = (content, index) => {
  return {
    type: CHANGE_POINTS,
    payload: content
  };
};

const initialState = {
  babies: [],
  points: 0,
  values: undefined
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  // ADD STUFF TO OTHER CASES LATER
  switch (type) {
    case GET_BABIES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          babies: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case RESET_ALL_POINTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case RESET_POINTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case ADD_POINTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case SUBTRACT_POINTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CHANGE_POINTS:
      return {
        ...state,
        points: payload
      };

    default:
      return state;
  }
};

export default reducer;
