import React, { useState } from 'react'

function ColorToggle() {

  const [isGreen, setIsGreen] = useState(true);
  const [btnToggle, setBtnToggle] = useState(true);
  return (
    <div>
        <h1>Color Toggle Card</h1>

        <div className= {`w-[290px] p-4 rounded-2xl mt-4 ${isGreen ? "bg-green-200" : "bg-orange-200"}`}>
            <h2 className='text-2 font-bold text-green-900 mt-4 mb-4'>color toggle card example</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident nam illo magnam amet dolore asperiores perferendis exercitationem corrupti voluptatem!</p>
            <button className='bg-green-500 text-xl font-medium text-white rounded-full px-4 py-2 cursor-pointer hover:bg-green-600'>Summery</button>
        </div>

        <button className='bg-blue-500 text-xl font-medium text-white rounded-full px-4 py-2 cursor-pointer hover:bg-blue-600 mt-5' onClick={()=> {
        setIsGreen(!isGreen);
        setBtnToggle(!btnToggle);}
        }>
          {btnToggle? "Orange" : "Green"}</button>
    </div>
  )
}

export default ColorToggle