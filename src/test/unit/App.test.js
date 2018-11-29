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
    expect(wrapper.instance().state.showAll).toEqual(false)
  })

  it('should toggle showAll when button is clicked', () => {
    wrapper.instance().toggleShowAll()
    expect(wrapper.instance().state.showAll).toEqual(true)
  })

  it('should filter districts held in state based on a search value', () => {
    const e = { target: {value: 'colorado'} }
    wrapper.instance().handleInputUpdate(e)
    expect(wrapper.instance().state.districts.length).toEqual(2)
  })

  it('should handle district selection when compareDistrict is called', () => {
    wrapper.instance().compareDistrict('Colorado')

    expect(wrapper.instance().state.compared1.location).toEqual('COLORADO')

    wrapper.instance().compareDistrict('AGATE 300')

    expect(wrapper.instance().state.compared2.location).toEqual('AGATE 300')
  })

  it('should remove a selected district if clicked on again', () => {
    const newWrapper = shallow(<App />)
    newWrapper.instance().compareDistrict('Colorado')
    expect(newWrapper.instance().state.compared1.location).toEqual('COLORADO')

    newWrapper.instance().compareDistrict('AGATE 300')
    expect(newWrapper.instance().state.compared2.location).toEqual('AGATE 300')

    newWrapper.instance().compareDistrict('Colorado')
    expect(newWrapper.instance().state.compared1).toEqual(undefined)

    newWrapper.instance().compareDistrict('AGATE 300')
    expect(newWrapper.instance().state.compared2).toEqual(undefined)

  })
})

