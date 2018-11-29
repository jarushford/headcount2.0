import React from 'react'
import District from './District'
import './styles/ComparisonContainer.css'

export default function ComparisonContainer({ compared1, compared2, comparedAvg, compareDistrict }) {
  const compared1Component = 
    <District 
      districtData={compared1}
      compareDistrict={compareDistrict}
      selected={true}
    />
  const compared2Component = 
    <District 
      districtData={compared2}
      compareDistrict={compareDistrict}
      selected={true}
    />

  if (compared1 && !compared2) {
    return (
      <section className='comparison-container'>
        {compared1Component}
        <div className='comparison-window'>
          <h2>{compared1.location}: {compared1.districtAvg}</h2>
          <p>has</p>
          <h3>--</h3>
          <p>times the average attendance of</p>
        </div>
        <div className='comparison-placeholder'>
          Select a district to compare
        </div>        
      </section>
    )
  } else if (!compared1 && compared2) {
    return (
      <section className='comparison-container'>
        <div className='comparison-placeholder'>
          Select a district to compare
        </div>
        <div className='comparison-window'>
          <p>has</p>
          <h3>--</h3>
          <p>times the average attendance of</p>
          <h2>{compared2.location}: {compared2.districtAvg}</h2>
        </div>
        {compared2Component}
      </section>
    )
  } else if (compared1 && compared2) {
    return (
      <section className='comparison-container'>
        {compared1Component}
        <div className='comparison-window'>
          <h2>{compared1.location}: {compared1.districtAvg}</h2>
          <p>has</p>
          <h3>{comparedAvg.compared}</h3>
          <p>times the average attendance of</p>
          <h2>{compared2.location}: {compared2.districtAvg}</h2>
        </div>
        {compared2Component}
      </section>
    )
  } else {
    return (
      <section className='comparison-container'>
        <div className='comparison-placeholder'>
          Select a district to compare
        </div>
        <div className='comparison-window none-selected'></div>
        <div className='comparison-placeholder'>
          Select a district to compare
        </div>        
      </section>
    )
  }
}