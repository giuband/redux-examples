import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DayPicker from '../../components/DayPicker';

const CalendarRow = ({ person, pickedDays, addDay, removeDay }) => {
  console.log(`%c[RENDER] Row for person ${person}`, 'color: #A7B');
  return (
    <div className="calendar-row">
      {person}:
      <DayPicker pickedDays={pickedDays} addDay={addDay} removeDay={removeDay} person={person} />
    </div>
  );
};

CalendarRow.propTypes = {
  person: PropTypes.string,
  pickedDays: PropTypes.array,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const { person } = ownProps;
  return {
    pickedDays: state.pickedDays[person],
  };
};

const mapDispatchToProps = dispatch => ({
  addDay: (person, day) => dispatch({ type: 'ADD_DAY', person, day }),
  removeDay: (person, day) => dispatch({ type: 'REMOVE_DAY', person, day }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarRow);
