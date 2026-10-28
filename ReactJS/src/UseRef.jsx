import React, { useRef } from 'react'

function UseRef() {

    const nameRef = useRef();
    const headingRef = useRef();

    const refValues=()=>{
        console.log(nameRef);
        nameRef.current.value="Fatima";
    }

    const headingChange = ()=>{
        headingRef.current.style.color="green";
    }

  return (
    <div>
        <h1 ref={headingRef}>UseRef Hook</h1>

        <input ref={nameRef} type="text" />
        <button onClick={refValues}>Click Here</button>
        <br /><br />
        <button onClick={headingChange}>Click Here</button>
    </div>
  )
}

export default UseRef