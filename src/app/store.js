import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { middleware as reduxpack } from 'redux-pack';

import reducers from '../features'; // this imports all of your reducers

// You do not need to edit this. If you want to add
// or include new reducers, import them at `features/index.js`.
const store = createStore(
  reducers,
  {},
  applyMiddleware(logger, thunk, reduxpack)
);

export default store;
