import React from 'react'
import District from './District'

export default function ComparisonContainer({ compared1, compared2, compareDistrict }) {
  if (compared1 && !compared2) {
    return (
      <section>
        <District 
          districtData={compared1}
          compareDistrict={compareDistrict}
        />
      </section>
    )
  } else if (!compared1 && compared2) {
    return (
      <section>
        <District 
          districtData={compared2}
          compareDistrict={compareDistrict}
        />
      </section>
    )
  } else {
    return (
      <section>
        <District 
          districtData={compared1}
          compareDistrict={compareDistrict}
        />
        <District 
          districtData={compared2}
          compareDistrict={compareDistrict}
        />
      </section>
    )
  }
}