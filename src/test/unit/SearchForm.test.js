import React from 'react';
import SearchForm from '../../SearchForm';
import { mount } from 'enzyme'

describe('Search Form', () => {
  it('should run handleInputUpdate when clicked', () => {
    const inputMock = jest.fn()
    const wrapper = mount(<SearchForm handleInputUpdate={inputMock} />)
    wrapper.find('input').simulate('change')
    expect(inputMock).toBeCalled()
  })

  it('should toggle showAll when Show All button is clicked', () => {
    const showAllMock = jest.fn()
    const wrapper = mount (<SearchForm toggleShowAll={showAllMock} />)
    wrapper.find('.show-all').simulate('click')
    expect(showAllMock).toBeCalled()
  })

})