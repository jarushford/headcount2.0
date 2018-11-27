import React from 'react';
import DistrictContainer from '../../DistrictContainer';
import { shallow } from 'enzyme'

describe('App', () => {
  const data = { Colorado: { location: 'Colorado', stats: { 2006: 0 } } }
  const wrapper = shallow(<DistrictContainer districts={data}/>)

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

})