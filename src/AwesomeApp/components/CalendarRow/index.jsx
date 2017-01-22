import React, { PropTypes } from 'react';
import DayPicker from '../../connected-components/DayPicker';

const CalendarRow = ({ person }) => {
  console.log(`%c[RENDER] Row for person ${person}`, 'color: #A7B');
  return (
    <div>
      {person}:
      <DayPicker person={person} />
    </div>
  );
};

CalendarRow.propTypes = {
  person: PropTypes.string,
};

export default CalendarRow;
