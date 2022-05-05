import React from 'react'
import "./input3.css"
function Input3(props) {
  return (
    <div>
        <p className= 'input3_header'>{props.name}</p>
        <input className='input3_container' placeholder={props.placeholder}/>
    </div>
  )
}

export default Input3