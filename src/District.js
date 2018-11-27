import React from 'react'
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
    <div>
      <h2>{location}</h2>
      <ul>{statsArray}</ul>
    </div>
  )
}