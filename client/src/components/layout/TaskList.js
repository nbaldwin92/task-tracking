import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import styled from 'styled-components';

import NewTask from '../assets/NewTask';

const TaskList = props => {
  const { tasks } = props;

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
            <div>Task List</div>
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
  tasks: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
