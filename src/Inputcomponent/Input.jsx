import React from 'react'
import "./Input.css"
function Input(props) {
  return (
    <div>
        <p className='input_header'>{props.name}</p>
        <input className="input_container" placeholder={props.placeholder}/>
    </div>
  )
}

export default Input