import React from 'react'
import { uid } from 'react-uid'
import PropTypes from 'prop-types'
import District from './District'
import './styles/DistrictContainer.css'

export default function DistrictContainer({
  districts, showAll, compareDistrict,
  compared1, compared2
}) {
  let districtsToMap = districts
  
  if (!showAll) {
    districtsToMap = districts.slice().splice(0, 12)
  }

  const districtArray = districtsToMap.map((district) => {
    if (compared1 && district.location === compared1.location) {
      return buildDistrict(district, compareDistrict, true)
    } else if (compared2 && district.location === compared2.location) {
      return buildDistrict(district, compareDistrict, true)
    } else {
      return buildDistrict(district, compareDistrict, false)
    }
  })

  return (
    <div className="district-container">
      { districtArray }
    </div>
  )
}

/****************
 PRIVATE
****************/
const buildDistrict = (district, compareDistrict, selected) => {
  return (
    <District
      districtData={district}
      key={uid(district)}
      compareDistrict={compareDistrict}
      selected={selected}
    />
  )
}


DistrictContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAll: PropTypes.bool.isRequired,
  compareDistrict: PropTypes.func.isRequired,
  compared1: PropTypes.shape({ location: '', stats: PropTypes.shape({ 2006: 0 }) }),
  compared2: PropTypes.shape({ location: '', stats: PropTypes.shape({ 2006: 0 }) })
}

DistrictContainer.defaultProps = {
  compared1: undefined,
  compared2: undefined
}
