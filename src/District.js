import React from 'react'
import { uid } from 'react-uid'
import PropTypes from 'prop-types'
import './styles/District.css'

export default function District(props) {
  const { districtData, compareDistrict, selected } = props
  const { location, stats } = districtData
  const statsKeys = Object.keys(stats)
  const statsArray = statsKeys.map((year) => {
    return (
      <li key={uid(year)}>
        {year}
        <svg height="30" width="150">
          <line className="line-bg" x1={stats[year] * 145} y1="0" x2="145" y2="0" />
          <line className={`line-accent ${stats[year] < 0.5 && 'red-accent'}`} x1="0" y1="0" x2={stats[year] * 145} y2="0" />
        </svg>
        <span className="data-span">{stats[year]}</span>
      </li>
    )
  })

  return (
    <div
      className={`district-card ${selected && 'selected'}`}
      onClick={() => {
        compareDistrict(location)
      }}
    >
      <h2>{location}</h2>
      <hr />
      <ul>{statsArray}</ul>
    </div>
  )
}


District.propTypes = {
  districtData: PropTypes.shape({ location: '', stats: PropTypes.shape({ 2005: 0 }) }).isRequired,
  compareDistrict: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}
