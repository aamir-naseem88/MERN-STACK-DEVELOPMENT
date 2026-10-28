import { useEffect, useState } from 'react'

function UseEffectHook() {
    function fun1(){
console.log("I am another function");
    }

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        fun1();
    }, []);

  return (
    <div>
        <h1>useEffect Hook</h1>
        <h1>function one</h1>
        <button onClick={fun1}>click here to run fun1</button>

<h2>count: {count}</h2>
<button onClick={()=> setCount(count+1)}>count</button>
    </div>
  )
}

export default UseEffectHook