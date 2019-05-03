import {
  CREATE_NEW_TASK,
  SHOW_TASK_LIST,
  SHOW_TASK_HOME,
} from '../actions/types';

const isEmpty = require('is-empty');

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

    default:
      return state;
  }
}
