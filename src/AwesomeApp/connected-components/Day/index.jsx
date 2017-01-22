import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Day = ({ personDay, person, day, addDay, removeDay }) => {
  const className = (personDay) ? 'active' : '';
  const onClick = (personDay) ? removeDay : addDay;
  return (
    <button key={personDay} className={className} onClick={() => onClick(person, day)}>
      {day}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { person, day } = ownProps;
  const key = `${person}-${day}`;
  return {
    personDay: state.pickedDays[key],
  };
};

const mapDispatchToProps = dispatch => ({
  addDay: (person, day) => dispatch({ type: 'ADD_DAY', person, day }),
  removeDay: (person, day) => dispatch({ type: 'REMOVE_DAY', person, day }),
});

Day.propTypes = {
  person: PropTypes.string,
  day: PropTypes.number,
  personDay: PropTypes.bool,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Day);
