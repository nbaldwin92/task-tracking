import { useState } from 'react';

const useForm = inputNames => {
  const [values, setValues] = useState(inputNames);
  const [lastUpdated, setLastUpdated] = useState('');

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setLastUpdated(name);
  };

  return {
    onChangeHandler,
    values,
    lastUpdated,
  };
};

export default useForm;
