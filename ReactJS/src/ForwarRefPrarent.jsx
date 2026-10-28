import React, { useRef } from 'react'
import ForwardRefChild from './ForwardRefChild';

function ForwarRefPrarent() {

    const fieldValue = useRef();

    function ValueFunc(){
        fieldValue.current.focus();
        fieldValue.current.value='2024';
    }
  return (
    <div>
        <h1>Forward Ref Parent Component</h1>
        <br />
        <ForwardRefChild ref={fieldValue}/>
        <br /><br />
        <button onClick={ValueFunc} className='px-4 py-2 rounded font-semibold bg-green-500'>Send</button>
    </div>
  )
}

export default ForwarRefPrarent