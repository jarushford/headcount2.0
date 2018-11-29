import React from 'react';
import ComparisonWindow from '../../ComparisonWindow';
import { shallow } from 'enzyme'

describe('Comparison Window', () => {
  it('should match the snapshot with or without data',() => {
    const compare1 = {
      location: 'Colorado',
      stats: { 2006: 0.5 }, 
      districtAvg: 0.5 
    }
    const compare2 = {
      location: 'ASPEN', 
      stats: { 2006: 0.8 }, 
      districtAvg: 0.8 
    }
    const avg = {
      'Colorado': 0.5, 
      'ASPEN': 0.8, 
      compared: 0.65
    }

    const wrapper1 = shallow(<ComparisonWindow compare1={compare1} compare2={compare2} comparedAvg={avg}/>)
    const wrapper2 = shallow(<ComparisonWindow />)

    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
  })
})