import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationMenu.css'

export  const NavigtaionMenu =()=>{
    return(
        <ul>
           <li><Link to="/" className="link-name">Home</Link></li>
           <li><Link to="/login" className="link-name">Login</Link></li>
           <li><Link to="/register" className="link-name">Register</Link></li>
        </ul>
    )
}