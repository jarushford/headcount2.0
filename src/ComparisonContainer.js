import React from 'react'
import District from './District'
import ComparisonWindow from './ComparisonWindow'
import './styles/ComparisonContainer.css'

export default function ComparisonContainer({ compared1, compared2, comparedAvg, compareDistrict, currentData }) {
  const comparisonPlaceholder = 
    <div className='comparison-placeholder'>
      Select a district to compare
    </div>

  var compared1Component
  var compared2Component

  if (compared1) {
    compared1Component = 
      <District 
        districtData={compared1}
        compareDistrict={compareDistrict}
        selected={true}
      />
  } else {
    compared1Component = comparisonPlaceholder
  }

  if (compared2) {
    compared2Component = 
      <District 
        districtData={compared2}
        compareDistrict={compareDistrict}
        selected={true}
      />
  } else {
    compared2Component = comparisonPlaceholder
  }

  return (
    <section className='comparison-container'>
      {compared1Component}
      <ComparisonWindow 
        compared1={compared1}
        compared2={compared2}
        comparedAvg={comparedAvg}
        currentData={currentData}
      />
      {compared2Component}
    </section>
  )
}

