import React from 'react'

function DateInReact() {
    let myDate = new Date();
  return (
    <div>
        <h1>How to work with date in React</h1>
        <h2>Full Date: {myDate.toString()}</h2>
        <h2>Day of Week:{myDate.getDay()}</h2>
        <h2>Date:{myDate.getDate()}</h2>
        <h2>Month:{myDate.getMonth()+1}</h2>
        <h2>Year: {myDate.getFullYear()}</h2>
        <h2>Custom Date: {myDate.getDate()}
            / {myDate.getMonth()}
            / {myDate.getFullYear()}
        </h2>
        <h2>Time: {myDate.getHours()}</h2>
        <h2>Time: {myDate.getMinutes()}</h2>
        <h2>Time: {myDate.getSeconds()}</h2>
        <h2>Time: {myDate.getMilliseconds()}</h2>
        <h2>Custom Time: {myDate.getHours()} : {myDate.getMinutes()} : {myDate.getSeconds()} : {myDate.getMilliseconds()}</h2>
    </div>
  )
}

export default DateInReact