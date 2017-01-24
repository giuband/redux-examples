import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Day from '../Day';

const DayPicker = ({ days, person }) => (
  <div className="calendar-row__day-picker">
    {days.map(day => <Day key={`${person}-${day}`} day={day} person={person} />)}
  </div>
);

DayPicker.propTypes = {
  person: PropTypes.string,
  days: PropTypes.array,
};

const mapStateToProps = state => ({ days: state.days });

export default connect(mapStateToProps)(DayPicker);
