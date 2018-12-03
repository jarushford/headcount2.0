import React, { Component } from 'react'
import DistrictContainer from './DistrictContainer'
import DistrictRepository from './helper'
import SearchForm from './SearchForm'
import ComparisonContainer from './ComparisonContainer'
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
    this.districtRepository = new DistrictRepository(kinderData)
    this.state = {
      dataOptions: {
        kinderData,
        onlineData,
        gradData,
        incomeData,
        enrollmentData,
        remediationData,
        povertyData
      },
      currentData: 'kinderData',
      districts: [],
      showAll: false,
      compared1: undefined,
      compared2: undefined,
      comparedAvg: undefined
    }
  }

  componentDidMount() {
    const { searchInput } = this.state
    this.setState({
      districts: this.districtRepository.findAllMatches(searchInput)
    })
  }

  handleInputUpdate = (e) => {
    this.setState({
      districts: this.districtRepository.findAllMatches(e.target.value)
    })
  }

  toggleShowAll = () => {
    const { showAll } = this.state
    this.setState({
      showAll: !showAll
    })
  }

  compareDistrict = (district) => {
    const districtToCompare = this.districtRepository.findByName(district)
    districtToCompare.districtAvg = this.districtRepository
      .findAverage(district)
    this.setCompareOne(districtToCompare)
    this.setCompareTwo(districtToCompare)
  }

  setCompareOne = (district) => {
    const { compared1, compared2 } = this.state
    if (!compared1
      && !compared2) {
      this.setState({ compared1: district })
    } else if (!compared1 && compared2) {
      this.setState({
        compared1: district,
        comparedAvg: this.districtRepository
          .compareDistrictAverages(district.location, compared2.location)
      })
    } else if (compared1
      && compared1 === district) {
      this.setState({ compared1: undefined, comparedAvg: undefined })
    }
  }

  setCompareTwo = (district) => {
    const { compared1, compared2 } = this.state
    if (compared1 && !compared2
      && compared1 !== district) {
      this.setState({
        compared2: district,
        comparedAvg: this.districtRepository
          .compareDistrictAverages(compared1.location, district.location)
      })
    } else if (!compared1
      && compared2 === district) {
      this.setState({ compared2: undefined, compared1: undefined, comparedAvg: undefined })
    } else if (compared2
      && compared2 === district) {
      this.setState({ compared2: undefined, comparedAvg: undefined })
    }
  }

  selectData = (dataSet) => {
    const { dataOptions, searchInput } = this.state
    this.districtRepository = new DistrictRepository(dataOptions[dataSet])
    this.setState({
      compared1: undefined,
      compared2: undefined,
      comparedAvg: undefined,
      districts: this.districtRepository.findAllMatches(searchInput),
      currentData: dataSet
    })
  }

  render() {
    const {
      districts, showAll, compared1, compared2, comparedAvg, currentData
    } = this.state

    if (districts.length === 0) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <ComparisonContainer
          compared1={compared1}
          compared2={compared2}
          comparedAvg={comparedAvg}
          compareDistrict={this.compareDistrict}
          currentData={currentData}
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
    )
  }
}

export default App
