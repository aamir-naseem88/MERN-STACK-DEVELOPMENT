import React from 'react'
import UsingModule from './css/UsingModule.module.css'

function UsingModules() {
  return (
    <div>
        <h1 className={UsingModule.heading}>This is heading importing styles from module file</h1>
    </div>
  )
}

export default UsingModules