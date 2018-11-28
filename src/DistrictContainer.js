import React from 'react'
import District from './District'
import './styles/DistrictContainer.css'
import PropTypes from 'prop-types'
import  { uid } from 'react-uid'

export default function DistrictContainer({ districts, showAll }) {
  let districtKeys = Object.keys(districts)
  if (!showAll) {
    districtKeys = districtKeys.splice(0, 12);
  }
  const districtArray = districtKeys.map(district => {
    return <District districtData={districts[district]} key={uid(district)} />
  })

  return (
    <div className='district-container'>
      { districtArray }
    </div>
  )
}

DistrictContainer.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object)
}