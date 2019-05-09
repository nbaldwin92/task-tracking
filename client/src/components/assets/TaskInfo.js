import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';

const TaskInfo = props => {
  const { match } = props;
  const { id } = match.params;
  const [taskInfo, setTaskInfo] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getTask = async () => {
      const response = await axios.get('/api/tasks/findTask', {
        params: {
          id,
        },
      });

      if (mounted) {
        setTaskInfo(response.data);
      }
    };
    getTask();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (!taskInfo) {
    return <div>nothing</div>;
  }
  return (
    <div>
      <div key={taskInfo._id}>
        <li> {taskInfo.description}</li>
      </div>
    </div>
  );
};

TaskInfo.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TaskInfo;
