import React from 'react'

export default function SearchForm({ handleInputUpdate, toggleShowAll }) {
    return (
      <div>
        <input onChange={(e) => handleInputUpdate(e.target.value)}/>
        <button onClick={(e) => {
          toggleShowAll(e)
          if (e.target.innerText === 'Show All') {
            e.target.innerText = 'Show Less'
          } else {
            e.target.innerText = 'Show All'
          }
        }}>Show All</button>
      </div>
    )
}