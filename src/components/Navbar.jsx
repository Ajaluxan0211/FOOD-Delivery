import React from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className="navbar-menu">
            <li>Home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="navbar-search-icon" />
            <img src={assets.basket_icon} alt="" className="dot" />
       <button className='button'>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
