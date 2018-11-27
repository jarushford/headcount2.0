import React from 'react';
import District from '../../District';
import { shallow } from 'enzyme'

describe('App', () => {
  const data = { location: 'Colorado', stats: { 2006: 0 } }
  const wrapper = shallow(<District districtData={data}/>)

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

})