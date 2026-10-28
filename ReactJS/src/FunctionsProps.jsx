import React from "react";

function FunctionsProps({fun1, name}) {
  
  return (
    <div>
      <h1>Functions as props</h1>
      <button className="px-4 py-2 bg-green-500 rounded-2xl" onClick={()=> fun1(name)}>
        Run fun1
      </button>
      {/* <button className="px-4 py-2 bg-green-500 rounded-2xl" onClick={fun2}>
        Run fun2
      </button> */}
    </div>
  );
}

export default FunctionsProps;
