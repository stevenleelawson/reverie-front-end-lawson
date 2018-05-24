import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './index';

describe('PostForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update the state on handleChange', () => {
    //setup
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
});
