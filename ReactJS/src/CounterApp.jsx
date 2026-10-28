import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-green-500 text-white p-2 rounded-2xl w-1/2 mb-6 mx-auto">
        Counter App
      </h1>
      <h2 className="text-6xl font-bold text-center bg-green-200 text-black p-6 rounded-2xl w-1/2 mx-auto">
        {count}
      </h2>
      <div className="flex flex-row w-1/2 mx-auto gap-5 justify-center mt-5">
        <button onClick={()=> setCount(count+1)} className="bg-green-500 text-white px-4 py-2 rounded text-semibold hover:bg-green-600 cursor-pointer">
          Increse
        </button>
        <button onClick={()=> setCount(0)} className="bg-orange-500 text-white px-4 py-2 rounded text-semibold hover:bg-orange-600 cursor-pointer">
          Reset
        </button>
        <button onClick={()=> setCount(count-1)} className="bg-yellow-500 text-white px-4 py-2 rounded text-semibold hover:bg-yellow-600 cursor-pointer">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
