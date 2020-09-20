// Action Types
const TOGGLE_DRAWER = 'UI/TOGGLE_DRAWER';
const CHANGE_CHOICE = 'UI/CHANGE_CHOICE';

const initialState = {
  isDrawerOpened: false,
  choice: 0
};

export const toggleDrawer = isDrawerOpened => {
  return {
    type: TOGGLE_DRAWER,
    payload: isDrawerOpened
  };
};

export const changeChoice = choice => {
  return {
    type: CHANGE_CHOICE,
    payload: choice
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpened: payload
      };

    case CHANGE_CHOICE:
      return {
        ...state,
        choice: payload,
        isDrawerOpened: false
      };

    default:
      return state;
  }
};

export default reducer;
