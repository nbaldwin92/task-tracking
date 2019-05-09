import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

import styled from 'styled-components';

import NewTask from '../assets/NewTask';

const TaskList = props => {
  const { auth, tasks } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/tasks/myTasks', {
        params: {
          userID: auth.user.id,
        },
      })
      .then(result => setData(result.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTask = id => {
    axios.get('/api/tasks/removeTask', {
      params: {
        id,
      },
    });
    const { history } = props;
    history.push('/dashboard');
  };

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

  if (tasks.list) {
    return (
      <div>
        <Wrapper>
          <TaskTrackingPanel>
            <div>
              Task List
              <div>
                {data.map(task => (
                  <div key={task._id}>
                    <Link to={`/taskinfo/${task._id}`}> {task.name}</Link>
                    <button
                      type="button"
                      onClick={() => {
                        deleteTask(task._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TaskTrackingPanel>
        </Wrapper>
      </div>
    );
  }

  if (tasks.new) {
    return (
      <div>
        <NewTask />
      </div>
    );
  }

  if (tasks.timesheet) {
    return (
      <div>
        <Wrapper>
          <TaskTrackingPanel>
            <div>Timesheet</div>
          </TaskTrackingPanel>
        </Wrapper>
      </div>
    );
  }

  return (
    <div>
      <TaskTrackingPanel>
        <div>Home</div>
      </TaskTrackingPanel>
    </div>
  );
};

TaskList.propTypes = {
  auth: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  tasks: state.tasks,
});

export default withRouter(connect(mapStateToProps)(TaskList));
