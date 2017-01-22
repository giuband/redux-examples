import { daysInAMonth } from '../../data';

const initialState = daysInAMonth;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
