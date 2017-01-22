import { combineReducers } from 'redux';
import pickedDays from './pickedDays';
import people from './people';
import days from './days';

export default combineReducers({ pickedDays, people, days });
