import * as React from 'react';
// import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// skip tests for now. Shallow does not work fine with hooks
// test('It should render mainApp', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper).toMatchSnapshot();
// });
