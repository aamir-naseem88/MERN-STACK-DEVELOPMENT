import {useState} from 'react'

function UsestateAsProps({emp="Guest"}) {
  return (
    <div>
        <h1>State as Props</h1>
<h2>Employee Name: {emp}</h2>
    </div>
  )
}

export default UsestateAsProps