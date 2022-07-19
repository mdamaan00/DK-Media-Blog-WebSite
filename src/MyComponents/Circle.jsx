import React from 'react'
import "./css/Circle.css";
function Circle({num,curr,content}) {
  return (
    <div className="Circle">
    <h2 className='circle-h2'>STEP-{num}</h2>
    <h3 className='circle-h4'>{curr}</h3>
    <p className='circle-p'>{content}</p>
    </div>
  )
}

export default Circle