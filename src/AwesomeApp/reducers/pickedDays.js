import omit from 'lodash/omit';
import { useLargeState, randomPeoplePickedDays, lodgifyData } from '../../data';

const smallInitialState = lodgifyData;

const nestedPickedDays = (useLargeState) ? randomPeoplePickedDays : smallInitialState;
const initialState = Object.keys(nestedPickedDays).reduce((curState, person) => {
  const daysPickedByPerson = nestedPickedDays[person];
  const normalizedPersonDays = daysPickedByPerson.reduce((curNormState, day) =>
    Object.assign(curNormState, { [`${person}-${day}`]: true })
  , {});
  return Object.assign(curState, normalizedPersonDays);
}, {});

const pickedDays = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_DAY':
    case 'REMOVE_DAY': {
      const updatedPersonName = action.person;
      const day = action.day;
      const key = `${updatedPersonName}-${day}`;
      return (action.type === 'ADD_DAY') ?
        Object.assign({}, state, { [key]: true }) : omit(state, key);
    }
    default:
      return state;
  }
};

export default pickedDays;
