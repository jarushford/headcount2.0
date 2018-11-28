import React from 'react';
import DistrictContainer from '../../DistrictContainer';
import { shallow } from 'enzyme'


describe('App', () => {
  const data = [ { location: 'Colorado', stats: { 2006: 0 } } ]
  it('should match the snapshot with all data passed in for showLess', () => {
    const wrapper = shallow(<DistrictContainer districts={data}
      showAll={false}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with all data passed in for showAll', () => {
    const wrapper = shallow(<DistrictContainer districts={data}
      showAll={true}/>)
    expect(wrapper).toMatchSnapshot()
  })

})