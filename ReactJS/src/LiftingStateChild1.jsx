import React from 'react'

function LiftingStateChild1({setUser}) {

  return (
    <div>
        <h2>Lisfting State up Child1</h2>
        <input onChange={(e)=> setUser(e.target.value)} className='border border-green-200 p-2 rounded-xl mt-2' type="text" placeholder='Enter name'/>
        

    </div>
  )
}

export default LiftingStateChild1