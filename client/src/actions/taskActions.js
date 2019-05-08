import {
  CREATE_NEW_TASK,
  SHOW_TASK_LIST,
  SHOW_TASK_HOME,
  SHOW_TIMESHEET,
} from './types';

export const showTaskHome = () => ({
  type: SHOW_TASK_HOME,
});

export const setCreateNewTask = () => ({
  type: CREATE_NEW_TASK,
});

export const showTaskList = () => ({
  type: SHOW_TASK_LIST,
});

export const showTimesheet = () => ({
  type: SHOW_TIMESHEET,
});
