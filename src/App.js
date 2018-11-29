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
      compared2: null,
      comparedAvg: 0
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
    districtToCompare.districtAvg = 
      this.districtRepository.findAverage(district)
    this.setCompareOne(districtToCompare)
    this.setCompareTwo(districtToCompare)
  }

  setCompareOne = (district) => {
    if (!this.state.compared1 && 
      !this.state.compared2) {
      this.setState({ compared1: district })
    } else if (!this.state.compared1 && this.state.compared2) {
      this.setState({ 
        compared1: district,
        comparedAvg: this.districtRepository.compareDistrictAverages(district.location, this.state.compared2.location)
      })
    } else if (this.state.compared1 && 
      this.state.compared1 === district) {
      this.setState({ compared1: null })
    }
  }

  setCompareTwo = (district) => {
    if (this.state.compared1 && !this.state.compared2 &&
      this.state.compared1 !== district) {
      this.setState({ 
        compared2: district,
        comparedAvg: this.districtRepository.compareDistrictAverages(this.state.compared1.location, district.location)
      })
    } else if (!this.state.compared1 &&
      this.state.compared2 === district) {
      this.setState({ compared2: null, compared1: null })
    } else if (this.state.compared2 &&
      this.state.compared2 === district) {
      this.setState({ compared2: null })
    }
  }

  render() {
    const { districts, showAll, compared1, compared2, comparedAvg } = this.state
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <SearchForm 
          handleInputUpdate={this.handleInputUpdate}
          toggleShowAll={this.toggleShowAll}
        />
        <ComparisonContainer 
          compared1={compared1}
          compared2={compared2}
          comparedAvg={comparedAvg}
          compareDistrict={this.compareDistrict}
        />
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
