// @flow
import * as React from 'react';
import { sample } from 'lodash/fp';
import Form from './Form';
import useApi from './utils';
import options from './constants';
import Images from './Images';
import Button from './Button';
import Header from './Header';

import './App.css';

const App = () => {
  const getDataTypeValue = () => {
    const { value } = dataType;
    if (value === 'random')
      return sample(options.filter(option => option.value !== 'random')).value;
    return value;
  };
  // flow-disable-next-line missing flow annotation
  const [count, setCount] = React.useState({ display: 1, value: 1 });
  // flow-disable-next-line missing flow annotation
  const [dataType, setDataType] = React.useState(options[0]);
  const { callApi, state: data, isLoading } = useApi(
    `http://shibe.online/api/${getDataTypeValue()}?count=${count.value}`,
  );

  const setCountDisplay = e => {
    const { value } = e.target;
    setCount({ ...count, display: value });
  };

  const setCountValue = e => {
    const { value, validity } = e.target;
    if (validity.valid) setCount({ ...count, value });
    else setCount({ ...count, display: count.value });
  };

  return (
    <div className="App">
      <Header className="App-header">
        <Form
          fetchData={callApi}
          count={count}
          onChange={setCountDisplay}
          onBlur={setCountValue}
          dataType={dataType}
          setDataType={setDataType}
        />
        <Button action={callApi} isLoading={isLoading} />
      </Header>
      <Images images={data} />
    </div>
  );
};

export default App;
