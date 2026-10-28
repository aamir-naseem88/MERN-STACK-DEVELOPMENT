import React from 'react'

function ImportExport() {
  return (
    <div>
        <h2>we can use component inside component and can export both</h2>
        <p>this is our main component and beneath this we make another component and export it</p>
        {/* <InnerComponent /> */}
    </div>
  )
}

export function InnerComponent() {
  return (
    <div>
        <h3>this is inner component</h3>
    </div>
  )
}

export default ImportExport