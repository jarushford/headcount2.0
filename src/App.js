import React, { Component } from 'react';
import DistrictContainer from './DistrictContainer'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: { Colorado: { location: 'Colorado', stats: { 2006: 0 } } }
    }
  }

  componentDidMount() {
    const districtRepository = new DistrictRepository(kinderData);
    this.setState({
      districts: districtRepository.stats
    })
  }

  render() {
    return (
      <div>
        <h1>Headcount 2.0</h1>
        <DistrictContainer districts={this.state.districts}/>
      </div>
    );
  }
}

export default App;
