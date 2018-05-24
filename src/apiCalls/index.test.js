import React from 'react';
import * as api from '../apiCalls/';
import { shallow } from 'enzyme';

describe('API calls', () => {
  let mockRobot;
  beforeEach(() => {
    mockRobot =[{
      date_added: '10/27/70',
      first_active: '05/10/12',
      current_name: 'Bender',
      height: '300 in',
      weight: '400 lbs',
      intelligence_metric: 5
    }];

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({robots: mockRobot})
      })
    );
  })

  it('should call fetch with right params', () => {
    const expected = 'http://localhost:3000/api/v1/robots';

    api.fetchRobots();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });
})
