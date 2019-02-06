import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  firstReducer: firstReducer,
  auth: authReducer
});

export default rootReducer;
