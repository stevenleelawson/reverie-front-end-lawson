import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import * as api from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {
  let wrapper;
  let mockRobot;
  const mockAddRobot = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true});
    mockRobot = {
      date_added: "10/27/2022",
      first_active: "05/18/18",
      current_name: "Lester",
      height: "44 in",
      weight: "500 lbs",
    };

  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to add a robot', () => {
    wrapper.instance().addRobot(mockRobot);
    expect(api.postRobot).toHaveBeenCalled();
  });

  it('should be able to add a robot and update the page', () => {
    wrapper.instance().addRobot(mockRobot);
    expect(api.fetchRobots).toHaveBeenCalled();
  });

  it('should be able to remove a robot', () => {
    wrapper.instance().removeRobot();
    expect(api.deleteRobot).toHaveBeenCalled();
  })
});
