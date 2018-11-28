import React, { Component } from 'react'
import DistrictContainer from './DistrictContainer'
import DistrictRepository from './helper'
import SearchForm from './SearchForm'
import kinderData from './data/kindergartners_in_full_day_program'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.districtRepository = new DistrictRepository(kinderData);
    this.state = {
      districts: { Colorado: { location: 'Colorado', stats: { 2006: 0 } } },
      showAll: false,
      searchInput: ''
    }
  }
  
  componentDidMount() {
    this.setState({
      districts: this.districtRepository.stats
    })
  }

  handleInputUpdate = (value) => {
    this.setState({
      searchInput: value
    })
  }

  toggleShowAll = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <SearchForm handleInputUpdate={this.handleInputUpdate}
          toggleShowAll={this.toggleShowAll}/>
        <DistrictContainer districts={this.state.districts}
          showAll={this.state.showAll}/>
      </div>
    );
  }
}

export default App;
