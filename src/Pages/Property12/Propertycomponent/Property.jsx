import React from 'react'
import "./Property.css"

 function Property(props) {
  return (
    <div className='property'>
        <img className = "property_image" src = "/Images/Rectangle 3.png"/>
        <div className='property_about'>
            <div className='property_titleamountcont'>
               <h3 className='property_title'>{props.Propertytitle}</h3>
              <h3 className='property_amount'>{props.propertyamount}</h3>
            </div>
            <div className='property_typeandarrow'>
            <h3 className = "property_type">{props.propertype}</h3>
            <img className='property_arrow' src = "/Images/Vector (13).png"/>    
            </div>
           
           <h3 className = "property_location">{props.propertylocation}</h3>
        </div>
        
    </div>
  )
}

 export default Property
