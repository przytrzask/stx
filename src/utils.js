// @flow
// flow-disable-next-line missing flow annotation for alpha types
import { useState } from 'react';

export default function useApi(endpoint: string, selector: ?string) {
  const [state, setState] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // for development purposes
  async function callApi() {
    try {
      setLoading(true);
      setState(null);

      const response = await fetch(proxyUrl + endpoint);
      const data = await response.json();
      if (response.status === 200) {
        setState(data);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return { state: selector ? state.selector : state, setState, callApi, isLoading };
}
