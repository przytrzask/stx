// @ flow
import * as React from 'react';

const Button = ({ isLoading, action }: Props) => (
  <button type="button" disabled={isLoading} onClick={action}>
    {isLoading ? 'Ładowanie danych' : 'Wyślij'}
  </button>
);
type Props = {
  isLoading: boolean,
  action: Function,
};

export default Button;
