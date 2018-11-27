import React from 'react'
import './District.css'
const uuidv4 = require('uuid/v4')

export default function District({ districtData }) {
  const { location, stats } = districtData
  const statsKeys = Object.keys(stats)
  const statsArray = statsKeys.map(year => {
    return (
      <li key={uuidv4()}>{year}: {stats[year]}</li>
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