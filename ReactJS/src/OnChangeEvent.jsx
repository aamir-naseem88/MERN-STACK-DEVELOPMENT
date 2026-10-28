import React, { useState } from 'react'

function OnChangeEvent() {
    const [name, setName] = useState('no name');
    const [phone, setPhone] = useState('0');

  return (
    <div className='w-1/2 mx-auto'>
        <form action="" className='border-2 p-5 flex flex-col gap-4 mb-5'>
            <input onChange={(event)=> setName(event.target.value)} className="border p-2 rounded" type="text" placeholder='enter name' />
            <input onChange={(event)=> setPhone(event.target.value)} className="border p-2 rounded" type="number" placeholder='enter phone' />
            <button className='bg-green-500 text-white text-bold px-4 py-2 rounded w-fit mx-auto'>submit</button>
        </form>

        <div>
            <h1>User Name: {name}</h1>
            <h1>User Phone: {phone}</h1>
        </div>
    </div>
  )
}

export default OnChangeEvent