import React from 'react';
import { RobotContainer } from './index';
import { shallow } from 'enzyme';

describe('RobotContainer', () => {
  it('should match the snapshot', () => {
    const mockRobot =[{
      date_added: '10/27/70',
      first_active: '05/10/12',
      current_name: 'Bender',
      height: '300 in',
      weight: '400 lbs',
      intelligence_metric: 5
    }];

    const wrapper = shallow(<RobotContainer data={mockRobot}/>)
    expect(wrapper).toMatchSnapshot()
  });
});
