import React from 'react'
import District from './District'
const uuidv4 = require('uuid/v4')

export default function DistrictContainer({ districts }) {
  const districtKeys = Object.keys(districts)
  const districtArray = districtKeys.map(district => {
    return <District districtData={districts[district]} key={uuidv4()} />
  })

  return (
    <div>
      { districtArray }
    </div>
  )
}