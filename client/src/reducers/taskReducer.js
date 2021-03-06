import {
  CREATE_NEW_TASK,
  SHOW_TASK_LIST,
  SHOW_TASK_HOME,
  SHOW_TIMESHEET,
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_TASK_HOME:
      return {
        home: true,
      };
    case SHOW_TASK_LIST:
      return {
        list: true,
      };
    case CREATE_NEW_TASK:
      return {
        new: true,
      };
    case SHOW_TIMESHEET:
      return {
        timesheet: true,
      };

    default:
      return state;
  }
}
