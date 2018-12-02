import React from 'react'
import PropTypes from 'prop-types'
import './styles/SearchForm.css'

export default function SearchForm({ handleInputUpdate, toggleShowAll, selectData }) {
  return (
    <div className="searchForm">
      <select onChange={e => selectData(e.target.value)}>
        <option value="kinderData">Kindergarten Attendance</option>
        <option value="onlineData">Online Enrollment</option>
        <option value="gradData">High School Graduation</option>
        <option value="incomeData">Median Income</option>
        <option value="enrollmentData">Pupil Enrollment</option>
        <option value="remediationData">Remediation in Higher Education</option>
        <option value="povertyData">School Children in Poverty</option>
      </select>
      <input
        onChange={handleInputUpdate}
        placeholder="Search for a district..."
      />
      <button
        type="submit"
        className="show-all"
        onClick={(e) => {
          toggleShowAll(e)
          if (e.target.innerText === 'Show All') {
            e.target.innerText = 'Show Less'
          } else {
            e.target.innerText = 'Show All'
          }
        }}
      >
        Show All
      </button>
    </div>
  )
}

SearchForm.propTypes = {
  handleInputUpdate: PropTypes.func.isRequired,
  toggleShowAll: PropTypes.func.isRequired,
  selectData: PropTypes.func.isRequired
}
