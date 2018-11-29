import React from 'react'

export default function ComparisonWindow({ compared1, compared2, comparedAvg }) {
  if (compared1 && !compared2) {
    return (
      <div className='comparison-window'>
        <h2>{compared1.location}: {compared1.districtAvg}</h2>
        <p>has</p>
        <h3>--</h3>
        <p>times the average attendance of</p>
      </div>
    )
  } else if (!compared1 && compared2) {
    return (
      <div className='comparison-window'>
        <p>has</p>
        <h3>--</h3>
        <p>times the average attendance of</p>
        <h2>{compared2.location}: {compared2.districtAvg}</h2>
      </div>
    )
  } else if (compared1 && compared2) {
    return (
      <div className='comparison-window'>
        <h2>{compared1.location}: {compared1.districtAvg}</h2>
        <p>has</p>
        <h3>{comparedAvg.compared}</h3>
        <p>times the average attendance of</p>
        <h2>{compared2.location}: {compared2.districtAvg}</h2>
      </div>
    )
  } else {
    return <div className='comparison-window none-selected'></div>
  }
}