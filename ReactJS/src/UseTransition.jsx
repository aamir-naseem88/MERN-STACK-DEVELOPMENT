import React, { useTransition, startTransition } from 'react'

function UseTransition() {

    const [isPending, startTransition] = useTransition();
function handleTransition(){
    startTransition(async()=>{
await new Promise (res=>setTimeout(res,9000))
    })
    
}

  return (
    <div className='container-1200'>
        <h2>useTransition Hook</h2>
        {isPending?
        <img className='w-[160px]' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXpjNjN5ZDg4d2xrYWc5ZjRzdmU2Z3c2MHk1YnIzNDJoMzIyc2VvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rIq2x7gddEDXL1Vg1X/giphy.gif" alt="" />
:null }
        <button disabled={isPending} onClick={handleTransition} className='mt-3'>Click</button>
    </div>
  )
}

export default UseTransition