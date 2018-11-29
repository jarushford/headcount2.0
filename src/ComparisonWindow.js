import React from 'react'
import PropTypes from 'prop-types'

export default function ComparisonWindow({ compared1, compared2, comparedAvg }) {
  return (
      <div className='comparison-window'>
        <h2>{compared1.location} -- {compared1.districtAvg}</h2>
        <p>has</p>
        <h3>{comparedAvg.compared}</h3>
        <p>times the average attendance of</p>
        <h2>{compared2.location} -- {compared2.districtAvg}</h2>
      </div>
    )
}

ComparisonWindow.defaultProps = {
  compared1: {location: '', stats: {}, districtAvg: ''},
  compared2: {location: '', stats: {}, districtAvg: ''},
  comparedAvg: {compared: '--'}
}

ComparisonWindow.propTypes = {
  compared1: PropTypes.object,
  compared2: PropTypes.object,
  comparedAvg: PropTypes.object,
}