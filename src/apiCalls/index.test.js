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

  it('should call fetchRobots with right params', () => {
    const expected = 'http://localhost:3000/api/v1/robots';

    api.fetchRobots();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should call an error message on error', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.reject({
        status: 500
      })
    );
    const expected = new Error('Unable to fetch robots');
    expect(api.fetchRobots()).rejects.toEqual(expected);
  });

  it('should call postRobots with the right params', () => {
    const expected = [
      'http://localhost:3000/api/v1/robots',
      {
        method: 'POST',
        body: JSON.stringify(mockRobot),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];

    api.postRobot(mockRobot)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it('should call deleteRobot with the right params', () => {
    const id = {id: 1}
    const expected = [`http://localhost:3000/api/v1/robots/${id}`, { method: 'DELETE' }];
    api.deleteRobot(id)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it('should call putRobot with the right params', () => {
    const id = {id: 1}
    const robotChanges = {current_name: 'Taco'};
    const expected = [
      `http://localhost:3000/api/v1/robots/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(robotChanges),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];
    api.putRobot(id, robotChanges)
    expect(window.fetch).toHaveBeenCalledWith(...expected)

  })
});
