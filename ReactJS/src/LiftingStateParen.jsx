import React, { useState } from 'react'
import LiftingStateChild1 from './LiftingStateChild1'
import LiftingStateChild2 from './LiftingStateChild2'

function LiftingStateParen() {
     const [user, setUser] = useState("");
  return (
    <div>
        <h2>Lifting State up Parent</h2>
        <hr />
        <LiftingStateChild1 setUser={setUser}/>
        <LiftingStateChild2 user={user}/>
    </div>
  )
}

export default LiftingStateParen