import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should recieve district data and put it in state', () => {
    const keys = Object.keys(wrapper.instance().state.districts)
    expect(keys.length).toEqual(181)
  })

})

