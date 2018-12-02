import React from 'react'
import { uid } from 'react-uid'
import PropTypes from 'prop-types'
import District from './District'
import './styles/DistrictContainer.css'

export default function DistrictContainer({
  districts, showAll, compareDistrict,
  compared1, compared2
}) {
  let districtsToMap
  if (!showAll) {
    districtsToMap = districts.slice().splice(0, 12)
  } else {
    districtsToMap = districts
  }

  const districtArray = districtsToMap.map((district) => {
    let districtToReturn = (
      <District
        districtData={district}
        key={uid(district)}
        compareDistrict={compareDistrict}
        selected={false}
      />
    )
    if (compared1 && district.location === compared1.location) {
      districtToReturn = (
        <District
          districtData={district}
          key={uid(district)}
          compareDistrict={compareDistrict}
          selected
        />
      )
    } else if (compared2 && district.location === compared2.location) {
      districtToReturn = (
        <District
          districtData={district}
          key={uid(district)}
          compareDistrict={compareDistrict}
          selected
        />
      )
    }
    return districtToReturn
  })

  return (
    <div className="district-container">
      { districtArray }
    </div>
  )
}

DistrictContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAll: PropTypes.func.isRequired,
  compareDistrict: PropTypes.func.isRequired,
  compared1: PropTypes.shape({ location: '', stats: { 2006: 0 } }),
  compared2: PropTypes.shape({ location: '', stats: { 2006: 0 } })
}

DistrictContainer.defaultProps = {
  compared1: undefined,
  compared2: undefined
}
