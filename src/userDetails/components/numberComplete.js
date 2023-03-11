import React from 'react'
import "./numberComplete.css"

function numberComplete(props) {
  return (
    <div className='full-component'>
      <div className='circle'><span className='digit'>{props.digit}</span></div>
      <div className='progress-status text-center'>{props.status}</div>
    </div>
  )
}

export default numberComplete