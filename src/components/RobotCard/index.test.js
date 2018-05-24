import React from 'react';
import { shallow } from 'enzyme';
import { RobotCard } from './index';

describe('RobotCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RobotCard />)
    expect(wrapper).toMatchSnapshot();
  });
});
