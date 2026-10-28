import React from "react";

function EventsInReact() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Events in React</h1>
      <br />
      <br />
      <h2 className="text-4xl font-bold">click events</h2>
      <br />
      <button onClick={()=> alert('this is click event')} className="bg-green-500 px-4 py-2 text-white font-bold text-xl rounded">Click Me</button>
      
    </div>
  );
}

export default EventsInReact;
