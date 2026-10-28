import React from 'react'

function UncontrolledComponents() {

    function formHandler(event){
        // prevent form from loading
        event.preventDefault();
        const user = document.querySelector('#user').value;
        const phone = document.querySelector('#phone').value;

        console.log(`User Name: ${user} User Phone: ${phone}`);
    }
  return (
    <div>
        <h1 className='text-4xl mb-5 text-green-600 font-bold text-center'>Uncontrollecd components using useRef and DOM</h1>
        <p className='text-center'>When we talk about controlled and uncontrolled components it's mean we are talking about form or input field.</p>
        <p className='text-center'>Controlled components are those which are handle by use of useState() hook and uncontrolled components are those which are controlled by use of useRef() hook or DOM.</p>

        <div>
            <h1 className='text-2xl mb-5 text-green-900 font-bold text-center'>Uncontrollecd components using DOM</h1>
        {/* form div */}

        <div className='w-1/2 bg-green-100 rounded-2xl p-6 mx-auto'>
            <form onSubmit={formHandler} action="" className='flex flex-col'>
            <input id='user' className='mb-4 rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 outline-none' type="text" placeholder='Enter name' />
            <input id='phone' className='mb-4 rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 outline-none' type="number" placeholder='Enter phone' />
            <button className='px-4 py-2 font-medium text-white bg-green-500  rounded'>Submit</button>
            </form>
        </div>
            
        </div>
    </div>
  )
}

export default UncontrolledComponents