import React from 'react'
import PropTypes from 'prop-types'

export default function ComparisonWindow({
  compared1, compared2, comparedAvg, currentData
}) {
  const dataOptions = {
    kinderData: ' kindergarten attendance ',
    onlineData: ' online enrollment ',
    gradData: ' highschool graduation rate ',
    incomeData: ' median household income ',
    enrollmentData: ' total enrollment ',
    remediationData: ' remediation in higher education ',
    povertyData: ' students living in poverty '
  }
  return (
    <div className="comparison-window">
      <h2>
        {compared1.location}
        {' -- '}
        {compared1.districtAvg}
      </h2>
      <p>
        {' has '}
      </p>
      <h3>
        {comparedAvg.compared}
      </h3>
      <p>
        {'times the average '}
        {dataOptions[currentData]}
        of
      </p>
      <h2>
        {compared2.location}
        {' -- '}
        {compared2.districtAvg}
      </h2>
    </div>
  )
}

ComparisonWindow.defaultProps = {
  compared1: { location: '', stats: {}, districtAvg: '' },
  compared2: { location: '', stats: {}, districtAvg: '' },
  comparedAvg: { compared: '--' }
}

ComparisonWindow.propTypes = {
  compared1: PropTypes.shape({ location: '', stats: { 2006: 0 } }),
  compared2: PropTypes.shape({ location: '', stats: { 2006: 0 } }),
  comparedAvg: PropTypes.shape({ Location: 0, Location2: 0, compared: 0 }),
  currentData: PropTypes.string.isRequired
}
