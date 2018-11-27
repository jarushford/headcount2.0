import React from 'react'
import './District.css'
import PropTypes from 'prop-types'
import { uid } from 'react-uid'

export default function District({ districtData }) {
  const { location, stats } = districtData
  const statsKeys = Object.keys(stats)
  const statsArray = statsKeys.map(year => {
    if (stats[year] < 0.5) {
      var underHalf = true
    }
    return (
      <li key={uid(year)}>{year} 
        <svg height='30' width='150'>
          <line className='line-bg' x1={stats[year] * 145} y1='0' x2='145' y2='0'/>
          <line className={`line-accent ${underHalf && 'red-accent'}`} x1='0' y1='0' x2={stats[year] * 145} y2='0'/>
        </svg>
        <span className='data-span'>{stats[year]}</span>
      </li>
    )
  })

  return (
    <div className='district-card' >
      <h2>{location}</h2>
      <hr/>
      <ul>{statsArray}</ul>
    </div>
  )
}

District.propTypes = {
  districtData: PropTypes.object
}