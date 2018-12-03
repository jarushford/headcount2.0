import React from 'react'
import PropTypes from 'prop-types'
import District from './District'
import ComparisonWindow from './ComparisonWindow'
import './styles/ComparisonContainer.css'

export default function ComparisonContainer({
  compared1, compared2, comparedAvg, compareDistrict, currentData
}) {
  const comparisonPlaceholder = (
    <div className="comparison-placeholder">
      Select a district to compare
    </div>
  )

  let compared1Component
  let compared2Component

  if (compared1) {
    compared1Component = (
      <District
        districtData={compared1}
        compareDistrict={compareDistrict}
        selected
      />
    )
  } else {
    compared1Component = comparisonPlaceholder
  }

  if (compared2) {
    compared2Component = (
      <District
        districtData={compared2}
        compareDistrict={compareDistrict}
        selected
      />
    )
  } else {
    compared2Component = comparisonPlaceholder
  }

  return (
    <section className="comparison-container">
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

ComparisonContainer.propTypes = {
  compared1: PropTypes.shape({ location: '', stats: PropTypes.shape({ 2006: 0 }) }),
  compared2: PropTypes.shape({ location: '', stats: PropTypes.shape({ 2006: 0 }) }),
  comparedAvg: PropTypes.shape({ Location: 0, Location2: 0, compared: 0 }),
  currentData: PropTypes.string.isRequired,
  compareDistrict: PropTypes.func.isRequired
}

ComparisonContainer.defaultProps = {
  compared1: undefined,
  compared2: undefined,
  comparedAvg: undefined
}
