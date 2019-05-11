import { CLOCK_IN, CLOCK_OUT } from '../actions/types';

const initialState = {
  clockedin: false,
  clockedout: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLOCK_IN:
      return {
        clockedin: true,
      };
    case CLOCK_OUT:
      return {
        clockedout: true,
      };

    default:
      return state;
  }
}
