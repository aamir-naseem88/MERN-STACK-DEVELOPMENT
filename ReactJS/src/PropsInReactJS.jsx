import React from "react";

function PropsInReactJS({ students }) {
  return (
    <div>
      {/* topic heading starts here */}
      <div>
        <h1 className="text-4xl font-bold text-center bg-green-500 text-white p-4 rounded-2xl w-1/2 mb-6 mx-auto">
          Props in ReactJS
        </h1>
      </div>
      {/* topic heading ends here */}

      {/* topic content starts here */}
      <div className="mt-3 mb-5">
        <h2 className="text-3xl font-semibold text-center p-2 bg-green-300 text-black">
          Printing variables as Props
        </h2>
        {/* <h3 className="text-2xl text-bold font-semibold">Name: {props.user}</h3> */}
        {/* <h3 className="text-2xl text-bold font-semibold">Age: {props.age}</h3> */}

        <h2 className="text-3xl font-semibold text-center p-2 bg-green-300 text-black">
          Printing arrays as Props
        </h2>
        {/* <h3>colors: {props.color.toString()}</h3> */}

        <h2 className="text-3xl font-semibold text-center p-2 bg-green-300 text-black">
          Printing objects as Props
        </h2>
        {/* <h3>User Name: {user.name}</h3>
        <h3>User Email: {user.email}</h3> */}

        <h2 className="text-3xl font-semibold text-center p-2 bg-green-300 text-black">
          Printing array of object as Props
        </h2>
        {students.map((student) => (
          <div className="bg-blue-200 p-4 rounded-2xl mb-5">
          <h2>Student ID: {student.id}</h2>
          <h2>Student Name: {student.name}</h2>
          <h2>Student Class: {student.class}</h2>
          <h2>Student Result: {student.result}</h2>
          </div>
        ))}
      </div>
      {/* topic heading ends here */}
    </div>
  );
}

export default PropsInReactJS;
