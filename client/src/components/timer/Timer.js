import React, { useState } from 'react';

const Timer = () => {
  const [currentCount, setCount] = useState(10);

  return (
    <div>
      <div>{currentCount}</div>
      <button type="submit">Start Timer</button>
    </div>
  );
};

export default Timer;
