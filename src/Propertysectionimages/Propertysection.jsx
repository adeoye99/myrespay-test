import React from 'react'
import "./Propertysection.css"

function Propertysection(props) {
  return (
    <div className='propertysection'>
        <img className = "propertysection_img"src = {props.img}/>
        <p className='propertysection_name'>{props.name}</p>
    </div>
  )
}

export default Propertysection