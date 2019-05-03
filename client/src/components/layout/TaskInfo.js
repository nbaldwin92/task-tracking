import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const TaskInfo = () => {
  const Wrapper = styled.div`
    display: flex;
    width: 35vw;
    height: 100vh;
    justify-content: center;
    text-align: center;
    background-color: rgb(43, 46, 66);
    box-shadow: -3px 0px 5px 1px #222222;
  `;

  const LogoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    font-family: monospace;
    font-size: 2em;
  `;

  const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  `;

  return (
    <Wrapper>
      <nav>
        <LogoWrapper>
          <Link to="/">Notes</Link>
        </LogoWrapper>
        <SidebarWrapper>
          Time picker
          <Link to="/">Clock in</Link>
          <Link to="/">Clock out</Link>
          <Link to="/">Notes</Link>
        </SidebarWrapper>
      </nav>
    </Wrapper>
  );
};

export default TaskInfo;
