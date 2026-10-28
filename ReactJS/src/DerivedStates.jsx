import React, { useState } from 'react'

function DerivedStates() {
    const [user, setUser] = useState("");
    const [list, setList] = useState([]);

    function getList(){
        setList([...list,user]);
    }
  return (
    <div>
        <h2>Derived States</h2>
        <h2 className='mt-3'>Values from State Variables</h2>
        <h3 className='mt-2'>Total Users: {list.length}</h3>
        <h3 className='mt-2'>Unique Entries: {[...new Set(list)].length}</h3>
        <h3 className='mt-2'>Last Entry: {list[list.length-1]}</h3>
        <br />
        <input onChange={(e)=> setUser(e.target.value)} className='border border-green-200 p-2 rounded-xl' type="text" placeholder='Enter name'/>
        <br />
        <button onClick={getList} className='mt-3'>Submit</button>
        <br />
        <h2 className='mt-3'>Users List</h2>
        {list.map((user, index)=>(
            <h4 key={index}>{user}</h4>
        ))}

    </div>
  )
}

export default DerivedStates