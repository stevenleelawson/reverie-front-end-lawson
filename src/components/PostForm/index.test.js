import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './index';

describe('PostForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
