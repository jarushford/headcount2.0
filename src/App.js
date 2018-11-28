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
      districts: [ { location: '', stats: { 2006: 0 } } ],
      showAll: false
    }
  }
  
  componentDidMount() {
    this.setState({
      districts: this.districtRepository.findAllMatches(this.state.searchInput)
    })
  }

  handleInputUpdate = (e) => {
    this.setState({
      districts: this.districtRepository.findAllMatches(e.target.value)
    })
  }

  toggleShowAll = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  render() {
    const { districts, showAll } = this.state
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <SearchForm 
          handleInputUpdate={this.handleInputUpdate}
          toggleShowAll={this.toggleShowAll}
        />
        <DistrictContainer 
          districts={districts}
          showAll={showAll}
        />
      </div>
    );
  }
}

export default App;
