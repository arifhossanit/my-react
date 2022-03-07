import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/' style={(props)=>props.isActive ? {color: "red" }: {color: ""}}>Home</NavLink>
            </li>
            <li>
                <NavLink  to='/about' style={(props)=>props.isActive ? {color: "red"}: {color: ""}}>About</NavLink>
            </li>
            <li>
                <NavLink  to='/services' style={(props)=>props.isActive ? {color: "red"}: {color: ""}}>Services</NavLink>
            </li>
        </ul>
    </nav>
  )
}
