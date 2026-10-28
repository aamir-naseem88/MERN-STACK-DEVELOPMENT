import React from "react";

function PropsFullExample({ /*user, props, myArray*/ posts }) {
  return (
    <div>
      {/* <h2>Props as (Objects/Array/States) </h2> */}
      {/* <h3>I am variable send in props {props.user}</h3> */}
      {/* <br />
      <br />
      <h3>Receiving array of objects in props</h3>
      <br />
      {myArray.map((student) => (
        <>
          <h4 key={student.id}>{student.id}</h4>
          <h4>{student.name}</h4>
        </>
      ))} */}

        <h2>array of objects printed</h2>
        <br />
        {
            posts.map((post)=>(
             <div>
                <h4>Post Id: {post.id}</h4>
                <h2>Post Name: {post.title}</h2>
                <p>Post Description: {post.body}</p>
             </div>
            ))
        }
    </div>
  );
}

export default PropsFullExample;
