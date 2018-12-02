import React, { Component } from 'react'
import DistrictContainer from './DistrictContainer'
import DistrictRepository from './helper'
import SearchForm from './SearchForm'
import ComparisonContainer from './ComparisonContainer';
import kinderData from './data/kindergartners_in_full_day_program'
import onlineData from './data/online_pupil_enrollment'
import gradData from './data/high_school_graduation_rates'
import incomeData from './data/median_household_income'
import enrollmentData from './data/pupil_enrollment'
import remediationData from './data/remediation_in_higher_education'
import povertyData from './data/school_aged_children_in_poverty'

import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.districtRepository = new DistrictRepository(kinderData);
    this.state = {
      dataOptions: {
        'kinderData': kinderData,
        'onlineData': onlineData,
        'gradData': gradData,
        'incomeData': incomeData,
        'enrollmentData': enrollmentData,
        'remediationData': remediationData,
        'povertyData': povertyData
      },
      currentData: 'kinderData',
      districts: [ { location: '', stats: { 2006: 0 } } ],
      showAll: false,
      compared1: undefined,
      compared2: undefined,
      comparedAvg: undefined
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
      this.setState({ compared1: undefined, comparedAvg: undefined })
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
      this.setState({ compared2: undefined, compared1: undefined, comparedAvg: undefined })
    } else if (this.state.compared2 &&
      this.state.compared2 === district) {
      this.setState({ compared2: undefined, comparedAvg: undefined })
    }
  }

  selectData = (dataSet) => {
    this.districtRepository = 
      new DistrictRepository(this.state.dataOptions[dataSet])
    this.setState({
      compared1: undefined,
      compared2: undefined,
      comparedAvg: undefined,
      districts: this.districtRepository.findAllMatches(this.state.searchInput),
      currentData: dataSet
    })
  }


  render() {
    const { districts, showAll, compared1, compared2, comparedAvg } = this.state
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <ComparisonContainer 
          compared1={compared1}
          compared2={compared2}
          comparedAvg={comparedAvg}
          compareDistrict={this.compareDistrict}
          currentData={this.state.currentData}
        />
        <SearchForm 
          handleInputUpdate={this.handleInputUpdate}
          toggleShowAll={this.toggleShowAll}
          selectData={this.selectData}
        />
        <DistrictContainer 
          districts={districts}
          showAll={showAll}
          compared1={compared1}
          compared2={compared2}
          compareDistrict={this.compareDistrict}
        />
      </div>
    );
  }
}

export default App;
