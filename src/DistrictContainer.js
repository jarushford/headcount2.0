import React from 'react'
import District from './District'
import './DistrictContainer.css'
const uuidv4 = require('uuid/v4')

export default function DistrictContainer({ districts }) {
  const districtKeys = Object.keys(districts)
  const districtArray = districtKeys.map(district => {
    return <District districtData={districts[district]} key={uuidv4()} />
  })

  return (
    <div className='district-container'>
      { districtArray }
    </div>
  )
}