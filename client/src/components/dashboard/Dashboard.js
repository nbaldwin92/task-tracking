import React from 'react';

import styled from 'styled-components';

import TaskList from '../layout/TaskList';
import TaskInfo from '../layout/TaskInfo';
import MenuBar from '../layout/MenuBar';

const Dashboard = () => {
  const Wrapper = styled.div`
    display: flex;
  `;

  return (
    <div>
      <Wrapper>
        <MenuBar />
        <TaskList />
        <TaskInfo />
      </Wrapper>
    </div>
  );
};

export default Dashboard;
