import { CLOCK_IN, CLOCK_OUT } from './types';

export const setClockIn = () => ({
  type: CLOCK_IN,
});

export const setClockOut = () => ({
  type: CLOCK_OUT,
});
