import React, { useState } from "react";

function UseState() {
//   let userName = "Fatima Batool";

//   function convert() {
//     userName = "Zainab Rani";
//     alert(userName);
//   }

const [user, setUser] = useState("Fatima Batool");

function convertUser(){
    setUser("Zainab Rani");
}

  return (
    <div>
      <h1 className="text-5xl font-bold">useState hook</h1>
      <br />
      <br />
      <h2 className="text-4xl font-bold">useState variable</h2>
      <h3 className="text-2xl">Name: {user}</h3>
      <button
        onClick={convertUser}
        className="bg-green-500 px-4 py-2 text-white font-bold text-xl rounded"
      >
        Click Me
      </button>
    </div>
  );
}

export default UseState;
