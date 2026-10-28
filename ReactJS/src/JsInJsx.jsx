import React from "react";

function JsInJsx() {
  let userName = "Aamir Naseem";
  let age = 20;
  function myFun(){
    alert('this is function');
  }
const empInfo = {
    id: 01,
    name: "Fatima Bibi",
    age: 20,
    email: "fatima@ymail.com"
};

const colors = ["Red", "Green", "Blue", "White"];

const students = [
    {
        name: "Fatima Bibi",
        email: "fatima@ymail.com"
    },
     {
        name: "Zainab Batool",
        email: "zainab@ymail.com"
    }
];

  return (
    <div>
      <h1 className="text-5xl font-bold">JavaScript in JSX</h1>
      <br /><br />
      <h2 className="text-4xl font-bold">using variables</h2>
      <h3 className="text-2xl">Name: {userName}</h3>
      <h3 className="text-2xl">Age: {age}</h3>
      <br />
      <h2 className="text-4xl font-bold">functions</h2>
      <button className="bg-green-500 text-xl font-bold text-white px-4 py-2 rounded" onClick={myFun}>click</button>
       <br />
      <h2 className="text-4xl font-bold">printing objects</h2>
      <h3>Employee ID is {empInfo.id} <br />Name is {empInfo.name} <br /> age is {empInfo.age} <br />and eamil is {empInfo.email}</h3>
       <br />
      <h2 className="text-4xl font-bold">printing arrays</h2>
      <h3>the first color in array is {colors[0]} <br />the second color in array is {colors[1]}</h3>
      <br />
      <h2 className="text-4xl font-bold">printing array of objects</h2>
      <h3>Students are</h3>
      <h3>
        {students.map((student)=>(
            <h4>Name: {student.name} Email: {student.email}</h4>
        ))}
      </h3>
    </div>
  );
}

export default JsInJsx;
