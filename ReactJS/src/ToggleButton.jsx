import React, { useState } from "react";

function ToggleButton() {
  const [heading, setHeading] = useState(true);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-green-500 text-white p-2 rounded-2xl w-1/2 mb-6 mx-auto">
        Toggle Button
      </h1>
      {heading ? (
        <h2 className="text-6xl font-bold text-center bg-green-200 text-black p-6 rounded-2xl w-1/2 mx-auto">
          This is heading which will show and hide.
        </h2>
      ) : (
        ""
      )}

      <div className="flex flex-row w-1/2 mx-auto gap-5 justify-center mt-5">
        <button onClick={()=> setHeading(!heading)} className="bg-green-500 text-white px-4 py-2 rounded text-semibold hover:bg-green-600 cursor-pointer">
          Show/Hide Heading
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
