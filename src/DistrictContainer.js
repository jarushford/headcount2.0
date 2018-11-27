import React from 'react'
import District from './District'
import './styles/DistrictContainer.css'
import PropTypes from 'prop-types'
import  { uid } from 'react-uid'

export default function DistrictContainer({ districts }) {
  const districtKeys = Object.keys(districts)
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