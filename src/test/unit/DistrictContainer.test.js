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

  it('should match the snapshot with comparisons passed in', () => {
    const wrapper1 = shallow(<DistrictContainer districts={data}
      showAll={true} compared1={{location: 'Colorado'}}/>)
    expect(wrapper1).toMatchSnapshot()

    const wrapper2 = shallow(<DistrictContainer districts={data}
      showAll={true} compared2={{location: 'Colorado'}}/>)
    expect(wrapper2).toMatchSnapshot()

    const wrapper3 = shallow(<DistrictContainer districts={data}
      showAll={true} compared1={{location: 'Colorado'}} compared2={{location: 'APSEN'}}/>)
    expect(wrapper3).toMatchSnapshot()
  })

})