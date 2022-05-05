import React from 'react'
import "./Header.css"
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa"
function Header() {
  return (
    <div className='header'>
      <div className='header_searchcontainer'>
        <input className='header_searchinput' placeholder ="Search"/>
        <FiSearch className='header_searchicon' color='#A6A6A6'/>
      </div>
           <FaRegBell color='#038618' className='header_bell'/>
           <img className = "header_profileimage"src = "/Images/Ellipse 1.png"/>
           <div className = "header_propertyownername">
             <h3 className = "header_name"> Seyi Martins</h3>
             <p className='header_propertyowner'> Property Owner</p>
           </div>
           <img className = "header_downarrow"src = "/Images/Vector (12).png"/>
           
    </div>
  )
}

export default Header