import React from 'react';
import SearchForm from '../../SearchForm';
import { shallow, mount } from 'enzyme'

describe('Search Form', () => {
  it('should run handleInputUpdate when clicked', () => {
    const inputMock = jest.fn()
    const wrapper = shallow(<SearchForm handleInputUpdate={inputMock} />)
    wrapper.find('input').simulate('change')
    expect(inputMock).toBeCalled()
  })

  it('should toggle showAll when Show All button is clicked', () => {
    const showAllMock = jest.fn()
    const wrapper = mount(<SearchForm toggleShowAll={showAllMock} />)
    wrapper.find('.show-all').simulate('click')
    expect(showAllMock).toBeCalled()
  })

  it('should change button text when clicked', () => {
    const showAllMock = jest.fn()
    const wrapper = mount(<SearchForm toggleShowAll={showAllMock} />)
    wrapper.find('.show-all').simulate('click')
    expect(wrapper.find('.show-all').instance().innerText).toEqual('Show All')
    wrapper.find('.show-all').simulate('click')
    expect(wrapper.find('.show-all').instance().innerText).toEqual('Show Less')
  })

  it('should select a data set when an option is clicked on', () => {
    const selectMock = jest.fn()
    const wrapper = shallow(<SearchForm selectData={selectMock} />)
    wrapper.find('select').simulate('change', {target: {value: 'kinderData'}})
  })

})