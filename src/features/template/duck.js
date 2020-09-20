import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
// const FEATURE = 'DOMAIN/FEATURE';
// Example: const LOGIN = 'AUTH/LOGIN';

// Action Creators
// Examples:
// Action Creators with redux-pack and thunk
// export const login = credentials => {
//   return dispatch => { // dispatch provided by thunk middleware
//     return dispatch({
//       type: LOGIN,
//       promise: Api.Login(credentials) // with redux-pack
//     });
//   }
// };

// Initial State
const initialState = {};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // Include all action types here as switch case.
    // Example with redux-pack:
    // case LOGIN:
    //   return handle(state, action, { // you will be needing to import { handle } from 'redux-pack';
    //     start: prevState => ({
    //       ...prevState,
    //       // state mutations
    //     }),
    //     success: prevState => ({}),
    //     failure: prevState => ({}),
    //     finish: prevState => ({}),
    //   });

    default:
      return state;
  }
};

export default reducer;
