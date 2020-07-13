import React from 'react';

import renderer from 'react-test-renderer';
import Ticket from './ticket';


import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from './App';
jest.mock('axios');

configure({adapter: new Adapter()});
//Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('App: renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('test state id', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.instance().state.id).toBe(0);
  });

  it('test todos', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    instance.componentDidMount();
    instance.fetchData();
    instance.incrementId();
    const data = instance.state
    console.log({data})
    
  });

});


describe('Ticket component', () => {
  it('Ticket: renders correctly', () => {
    const tree = renderer.create(<Ticket />);
    expect(tree).toMatchSnapshot();
  });


});


test("fake", () => {

  expect(1 + 1).toBe(2);

})

