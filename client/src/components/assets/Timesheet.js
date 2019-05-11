import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store';

import { setClockIn, setClockOut } from '../../actions/timesheetActions';

const Timesheet = props => {
  const { auth, punch } = props;

  const handleSubmit = type => {
    axios
      .post('/api/timesheet/newpunch', {
        // TODO Map this to redux store and get specific user id
        userID: auth.user.id,
        type,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if (punch.clockedout) {
    return (
      <div>
        <h1>Clocked Out</h1>
        <button
          type="button"
          onClick={() => {
            store.dispatch(setClockIn());
            handleSubmit('clock-in');
          }}
        >
          Clock In
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Clocked In</h1>
      <button
        type="button"
        onClick={() => {
          store.dispatch(setClockOut());
          handleSubmit('clock-out');
        }}
      >
        Clock Out
      </button>
    </div>
  );
};

Timesheet.propTypes = {
  auth: PropTypes.object.isRequired,
  punch: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  punch: state.punch,
});

export default connect(mapStateToProps)(Timesheet);
