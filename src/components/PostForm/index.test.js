import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './index';

jest.mock('../../apiCalls');

describe('PostForm', () => {
  let wrapper;
  let mockAddRobot;
  beforeEach(() => {
    mockAddRobot = jest.fn()
    wrapper = shallow(<PostForm addRobot={mockAddRobot}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update the state on handleChange', () => {
    const mockEvent = {
      target: {
        value: 'Bender',
        name: 'current_name'
      }
    };

    const mockRobotState = {
      date_added: '',
      first_active: '',
      current_name: 'Bender',
      height: '',
      weight: '',
      intelligence_metric: 1
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(mockRobotState);
  });

  it('should call addRobot on submit', () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockAddRobot).toHaveBeenCalled();
  });

  it('should reset the state on submit', () => {
    const mockEvent = { preventDefault: jest.fn() };

    const expected = {
      date_added: '',
      first_active: '',
      current_name: '',
      height: '',
      weight: '',
      intelligence_metric: 1
    };
    wrapper.instance().handleSubmit(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });
});
