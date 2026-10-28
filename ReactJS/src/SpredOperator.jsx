import React from 'react'

function SpredOperator() {

    const females = ["Fatima", "Naima", "Hajira", "Zainab"];
    const males = ["Hassan", "Hussain"];

    const all = [...females, ...males, "Naheem", "Hussain", "Maryum"];

    const user = {
        name: "Muhammad Ali",
        age: "23"
    }

    const newUser = {...user, class: "9th"};


  return (
    <div>
        <h1>Spread Operator</h1>
        <h2>combined array by spread operator</h2>
        <h2>{all.toString()}</h2>
        <h2>{newUser.name}</h2>
        <h2>{newUser.age}</h2>
        <h2>{newUser.class}</h2>
    </div>
  )
}

export default SpredOperator