import React from 'react';

import styled from 'styled-components';

import Timer from '../timer/Timer';

const TimerSidebar = () => {
  const Wrapper = styled.div`
    display: flex;
    width: 35vw;
    height: 100vh;
    justify-content: center;
    text-align: center;
    background-color: rgb(43, 46, 66);
    box-shadow: -3px 0px 5px 1px #222222;
    color: white;
  `;

  const LogoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    font-family: monospace;
    font-size: 2em;
    color: white;
    margin-bottom: 80px;
  `;

  return (
    <Wrapper>
      <nav>
        <LogoWrapper>Timer</LogoWrapper>
        <Timer />
      </nav>
    </Wrapper>
  );
};

export default TimerSidebar;
