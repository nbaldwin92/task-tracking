import React from 'react';

import styled from 'styled-components';

import TaskList from '../layout/TaskList';
import TimerSidebar from '../layout/TimerSidebar';
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
        <TimerSidebar />
      </Wrapper>
    </div>
  );
};

export default Dashboard;
