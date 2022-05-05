import React from 'react'
import Input from "../Inputcomponent/Input"
import Input2 from '../Input2comp/Input2'
import Input3 from '../input3comp/Input3'
import "./Addnewproperty.css"
import Button from '../Buttoncomponent/Button'
function Addnewproperty() {
  return (
    <div className = "addnewproperty">
        <p className='addnewproperty_back'><img className='back_arrow' src = "/Images/Vector.png"/>Back</p>
        <h2 className='addnewproperty_header'>Add New Property</h2>
        <Input name = "Property Name" placeholder ="Zone B House"/>
        <Input2 name = "Property Description" placeholder = "Semi Detached Bungalow"/>
           <div className='addnewproperty_section'>
              <Input3 name = "State(Api)" placeholder = "State"/>
              <Input3 name = "City(Api)" placeholder = "City"/>
           </div>
        <Input name = "Address" placeholder = "123Abba Jones"/>
        <div className='addnewproperty_section'>
              <Input3 name = "PropertyType(Api)" placeholder = "Residential"/>
              <Input3 name = "Building Type(Api)" placeholder = "Apartment"/>
        </div>
        <Input name = "Amenities(Api)" />
        <p className='addnewproperty_upload'> Upload Property images?</p>
        <Button buttonname = "Save"/>
    </div>
  )
}

export default Addnewproperty