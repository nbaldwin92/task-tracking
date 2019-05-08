import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useForm from '../utils/useForm';

const NewTask = () => {
  const { values, onChangeHandler, handleSubmit, lastUpdated } = useForm(
    'taskName',
    'taskDescription'
  );

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // componentDidUpate logic
      document.getElementById(lastUpdated).focus();
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
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </form>
        </TaskTrackingPanel>
      </Wrapper>
    </div>
  );
};

export default NewTask;
