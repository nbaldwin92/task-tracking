import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import taskReducer from './taskReducer';
import timesheetReducer from './timesheetReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  tasks: taskReducer,
  punch: timesheetReducer,
});
