import React from 'react';
import ComparisonContainer from '../../ComparisonContainer';
import { shallow } from 'enzyme'

describe('Comparison Container', () => {
  const compared1 = {
    location: 'Colorado',
    stats: { 2006: 0.5 }, 
    districtAvg: 0.5 
  }
  const compared2 = {
    location: 'ASPEN', 
    stats: { 2006: 0.8 }, 
    districtAvg: 0.8 
  }
  const avg = {
    'Colorado': 0.5, 
    'ASPEN': 0.8, 
    comparedd: 0.65
  }
  const mockcompare = jest.fn()

  it('should match the snapshot with or without data', () => {
    const wrapper1 = shallow(<ComparisonContainer compared1={compared1} compared2={compared2} comparedAvg={avg} comparedDistrict={mockcompare}/>)
    const wrapper2 = shallow(<ComparisonContainer comparedDistrict={mockcompare}/>)
    const wrapper3 = shallow(<ComparisonContainer compared1={compared1} compared2={undefined} comparedAvg={avg} comparedDistrict={mockcompare}/>)
    const wrapper4 = shallow(<ComparisonContainer compared1={undefined} compared2={compared2} comparedAvg={avg} compareDistrict={mockcompare}/>)

    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
    expect(wrapper3).toMatchSnapshot()
    expect(wrapper4).toMatchSnapshot()
  })

})