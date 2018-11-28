import React from 'react'
import './styles/SearchForm.css'

export default function SearchForm({ handleInputUpdate, toggleShowAll }) {
    return (
      <div className="searchForm">
        <input onChange={handleInputUpdate}
          placeholder='Search for a district...'/>
        <button className='show-all'
          onClick={(e) => {
            toggleShowAll(e)
            if (e.target.innerText === 'Show All') {
              e.target.innerText = 'Show Less'
            } else {
              e.target.innerText = 'Show All'
            }
          }
        }>Show All</button>
      </div>
    )
}