import React from 'react'
import District from './District'
import './styles/DistrictContainer.css'
import PropTypes from 'prop-types'
import  { uid } from 'react-uid'

export default function DistrictContainer({ districts, showAll, compareDistrict,
compared1, compared2 }) {
  if (!showAll) { districts = districts.slice().splice(0, 12) }
  
  const districtArray = districts.map(district => {
    if (compared1 && district.location === compared1.location) {
      return <District districtData={district} key={uid(district)}
        compareDistrict={compareDistrict}
        selected={true}
      />
    } else if (compared2 && district.location === compared2.location) {
      return <District districtData={district} key={uid(district)}
        compareDistrict={compareDistrict}
        selected={true}
      />
    } else {
      return <District districtData={district} key={uid(district)}
        compareDistrict={compareDistrict}
        selected={false}
      />
    }
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