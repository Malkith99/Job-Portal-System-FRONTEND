import React from 'react'
import "./numberInComplete.css"

function numberInComplete(props) {
  return (
    <div className='full-component'>
      <div className='circleComplete'><span className='digit'>{props.digit}</span></div>
      <div className='progress-status text-center'>{props.status}</div>
    </div>
  )
}

export default numberInComplete