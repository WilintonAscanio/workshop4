import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <NavLink to = '/'>00 HOME </NavLink>
                    <NavLink to = 'destination'>01 DESTINATION </NavLink>
                    <NavLink to = 'crew'>02 CREW </NavLink>
                    <NavLink to = 'technology'>03 TECHNOLOGY </NavLink>
                   
                </ul>
            </nav>
        </>

    )
}

export default Navbar