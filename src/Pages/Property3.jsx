import React from 'react'
import "./property3.css"

function Property3() {
  return (
    <div className = 'property3'>
        <img className='property3_icon' src = "/Images/tenor.png" />
        
         <h2 className='property3_heading'>Property Added Succesfully</h2>
        <p className='property3_subheading'>Your new property was successfully added</p>
       <button className = "property3__addunits">Add Units</button>
       <button className = "property3__viewproperty">View Property</button>
    </div>
  )
}

export default Property3