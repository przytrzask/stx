// @flow
import * as React from 'react';
import Select from 'react-select';
import styled from 'styled-components/macro';

import options from './constants';
import type { Option } from './types';

const Form = ({ dataType, count, onChange, onBlur, setDataType }: Props) => (
  <React.Fragment>
    <StyledInput
      onChange={onChange}
      onBlur={onBlur}
      type="text"
      pattern="^(?:[1-9]|0[1-9]|10)$"
      value={count.display}
      maxLength="2"
    />
    <StyledSelect options={options} value={dataType} onChange={setDataType} />
  </React.Fragment>
);

type Props = {
  dataType: Option,
  count: { display: number, value: number },
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  onBlur: (SyntheticInputEvent<HTMLInputElement>) => void,
  setDataType: () => Option,
};

const StyledSelect = styled(Select)`
  width: 300px;
`;

const StyledInput = styled.input`
  width: 50px;
`;

export default Form;
