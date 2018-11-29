import React, { Component } from 'react'
import DistrictContainer from './DistrictContainer'
import DistrictRepository from './helper'
import SearchForm from './SearchForm'
import ComparisonContainer from './ComparisonContainer';
import kinderData from './data/kindergartners_in_full_day_program'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.districtRepository = new DistrictRepository(kinderData);
    this.state = {
      districts: [ { location: '', stats: { 2006: 0 } } ],
      showAll: false,
      compared1: null,
      compared2: null
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

  compareDistrict = (district) => {
    const districtToCompare = this.districtRepository.findByName(district)
    this.setCompareOne(districtToCompare)
    this.setCompareTwo(districtToCompare)
  }

  setCompareOne = (district) => {
    if (!this.state.compared1) {
      this.setState({ compared1: district })
    } else if (this.state.compared1 && 
      this.state.compared1 === district) {
      this.setState({ compared1: null })
    }
  }

  setCompareTwo = (district) => {
    if (this.state.compared1 && !this.state.compared2 &&
      this.state.compared1 !== district) {
      this.setState({ compared2: district })
    } else if (this.state.compared2 &&
      this.state.compared2 === district) {
      this.setState({ compared2: null })
    }
  }

  render() {
    const { districts, showAll, compared1, compared2 } = this.state
    let compare = <div></div>
    if (this.state.compared1 || compared2) {
      compare = <ComparisonContainer 
        compared1={compared1}
        compared2={compared2}
        compareDistrict={this.compareDistrict}
      />
    }
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <SearchForm 
          handleInputUpdate={this.handleInputUpdate}
          toggleShowAll={this.toggleShowAll}
        />
        {compare}
        <DistrictContainer 
          districts={districts}
          showAll={showAll}
          compareDistrict={this.compareDistrict}
        />
      </div>
    );
  }
}

export default App;
