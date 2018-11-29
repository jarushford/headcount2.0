import React from 'react'
import District from './District'
import './styles/DistrictContainer.css'
import PropTypes from 'prop-types'
import  { uid } from 'react-uid'

export default function DistrictContainer({ districts, showAll, compareDistrict }) {
  if (!showAll) { districts = districts.slice().splice(0, 12) }
  const districtArray = districts.map(district => {
    return <District districtData={district} key={uid(district)}
      compareDistrict={compareDistrict} />
  })

  return (
    <div className='district-container'>
      { districtArray }
    </div>
  )
}

DistrictContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object)
}