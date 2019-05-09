import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from 'axios';

import useForm from '../utils/useForm';

const NewTask = props => {
  const { auth } = props;

  const { values, onChangeHandler, lastUpdated } = useForm(
    'taskName',
    'taskDescription'
  );

  const handleSubmit = () => {
    axios
      .post('/api/tasks/newTask', {
        // TODO Map this to redux store and get specific user id
        userID: auth.user.id,
        name: values.taskName,
        description: values.taskDescription,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // componentDidUpate logic
      // eslint-disable-next-line no-lonely-if
      if (lastUpdated) {
        document.getElementById(lastUpdated).focus();
      }
    }
  });

  const Wrapper = styled.div`
    display: flex;
  `;
  const TaskTrackingPanel = styled.section`
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 65vw;
    text-align: center;
    background-color: rgb(43, 46, 66);
    color: white;
  `;

  return (
    <div>
      <Wrapper>
        <TaskTrackingPanel>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Task Name</label>
              <input
                className="input form-control"
                id="taskName"
                name="taskName"
                placeholder="Enter title"
                onChange={onChangeHandler}
                value={values.taskName}
              />
            </div>
            <div className="form-group">
              <label>Task Description</label>
              <input
                className="input form-control"
                name="taskDescription"
                id="taskDescription"
                placeholder="Enter description"
                onChange={onChangeHandler}
                value={values.taskDescription}
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </TaskTrackingPanel>
      </Wrapper>
    </div>
  );
};

NewTask.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NewTask);
