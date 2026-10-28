import React from 'react'
import { useFormStatus } from 'react-dom';

function UseFormStatus() {

  async function handleForm(){
    alert('hit ok to submit form');
    await new Promise (res => setTimeout(res, 2000));
    console.log('form submitted successfully.');
  }

  function MyForm(){
    const {pending} = useFormStatus();
    return(
      <>
            <input className='outline-none border-2 border-green-200 rounded p-2 focus:border-orange-200' type="text" placeholder='Enter Name'/>
            <br /><br />
            <input className='outline-none border-2 border-green-200 rounded p-2 focus:border-orange-200' type="tel" placeholder='enter phone' />
            <br /><br />
            <button className='px-4 py-2 bg-green-900 font-semibold text-white' disabled={pending}>{pending? "Submitting..." : "Submit"}</button>
      </>
    )
  }

  return (
    <div>
        <h1>useFormStatus Hook</h1>
        <br />
        <form action={handleForm}>
        <MyForm />
        </form>
    </div>
  )
}

export default UseFormStatus