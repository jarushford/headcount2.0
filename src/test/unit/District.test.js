import React from 'react';
import District from '../../District';
import { shallow } from 'enzyme'

describe('App', () => {
  const mockCompare = jest.fn()
  const data = { location: 'Colorado', stats: { 2006: 0 } }
  const wrapper = shallow(<District districtData={data}
    compareDistrict={mockCompare}
    selected={false}/>)

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when selected', () => {
    const wrapper2 = shallow(<District districtData={data}
    compareDistrict={mockCompare}
    selected={true}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should compare a card when clicked on', () => {
    wrapper.find('.district-card').simulate('click')

    expect(mockCompare).toBeCalled()
  })

})