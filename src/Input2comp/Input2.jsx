import React from 'react'
import "./input2.css"

function Input2(props) {
  return (
    <div >
        <p className='input2_header'>{props.name}</p>
        <textarea className='input2_container' placeholder={props.placeholder}/>

    </div>
  )
}

export default Input2