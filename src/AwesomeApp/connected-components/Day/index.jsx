import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Day = ({ isDaySelected, person, day, addDay, removeDay }) => {
  const className = (isDaySelected) ? 'active' : '';
  const onClick = (isDaySelected) ? removeDay : addDay;
  return (
    <button key={isDaySelected} className={className} onClick={() => onClick(person, day)}>
      {day}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { person, day } = ownProps;
  const key = `${person}-${day}`;
  return {
    isDaySelected: state.pickedDays[key],
  };
};

const mapDispatchToProps = dispatch => ({
  addDay: (person, day) => dispatch({ type: 'ADD_DAY', person, day }),
  removeDay: (person, day) => dispatch({ type: 'REMOVE_DAY', person, day }),
});

Day.propTypes = {
  person: PropTypes.string,
  day: PropTypes.number,
  isDaySelected: PropTypes.bool,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Day);
