import { combineReducers } from 'redux';

import auth from './auth/duck';
import admin from './admin/duck';
import ui from './ui/duck';
import scholib from './scholib/duck';
import schopoints from './schopoints/duck';
import grades from './grades/duck';
import home from './home/duck';

const rootReducer = combineReducers({
  // List all of your reducers here
  auth,
  admin,
  ui,
  scholib,
  schopoints,
  grades,
  home
});

export default rootReducer;
