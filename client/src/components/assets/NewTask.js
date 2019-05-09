import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import store from '../../store';

import useForm from '../utils/useForm';

import { showTaskList } from '../../actions/taskActions';

const NewTask = props => {
  const { auth } = props;

  const onShowTaskList = () => {
    store.dispatch(showTaskList());
  };

  const { values, onChangeHandler, lastUpdated } = useForm(
    'taskName',
    'taskDescription'
  );

  const handleSubmit = e => {
    e.preventDefault();

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
    onShowTaskList();
    const { history } = props;
    history.push('/dashboard');
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
          <form method="post" onSubmit={handleSubmit}>
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
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(NewTask));
