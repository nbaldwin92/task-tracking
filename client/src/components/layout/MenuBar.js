import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import store from '../../store';

import {
  setCreateNewTask,
  showTaskHome,
  showTaskList,
  showTimesheet,
} from '../../actions/taskActions';

const MenuBar = () => {
  const onAddNewTask = () => {
    // Set redux state to add new task
    store.dispatch(setCreateNewTask());
  };

  const onShowTaskList = () => {
    store.dispatch(showTaskList());
  };

  const onShowTaskHome = () => {
    store.dispatch(showTaskHome());
  };

  const onShowTimesheet = () => {
    store.dispatch(showTimesheet());
  };

  const Wrapper = styled.div`
    display: flex;
    width: 5vw;
    height: 100vh;
    background-color: rgb(43, 46, 66);
    justify-content: center;
    text-align: center;
    border-right: 5px solid rgb(45, 49, 68);
  `;

  const LogoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    font-family: monospace;
    font-size: 1em;
  `;

  const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  `;

  const IconButton = styled.button`
    background-color: transparent;
    color: gray;
    border-width: 0px;
    margin: 20px;
  `;

  return (
    <Wrapper>
      <nav>
        <LogoWrapper>
          <Link to="/dashboard">Icon</Link>
        </LogoWrapper>
        <SidebarWrapper>
          <IconButton type="submit" onClick={onShowTaskHome}>
            <i className="fas fa-home fa-2x" />
          </IconButton>
          <IconButton type="submit" onClick={onShowTaskList}>
            <i className="fas fa-list fa-2x" />
          </IconButton>
          <IconButton type="submit" onClick={onAddNewTask}>
            <i className="fas fa-plus-circle fa-2x" />
          </IconButton>
          <IconButton type="submit" onClick={onShowTimesheet}>
            <i className="fas fa-clock fa-2x" />
          </IconButton>
        </SidebarWrapper>
      </nav>
    </Wrapper>
  );
};

export default MenuBar;
