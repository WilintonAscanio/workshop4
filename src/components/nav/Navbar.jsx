import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss"
import icon from "../../assets/shared/logo.svg"

const Navbar = () => {
    return (
        <header className='header'>
            <figure>
                <img src={icon} alt="icon" />
            </figure>
            <small></small>
            <nav className='header__navBar'>
                <ul>
                    <NavLink to='/' className='header__navBar__link'><span>00</span> HOME </NavLink>
                    <NavLink to='destination/Moon' className='header__navBar__link'><span>01</span> DESTINATION </NavLink>
                    <NavLink to='crew' className='header__navBar__link'><span>02</span> CREW </NavLink>
                    <NavLink to='technology' className='header__navBar__link'><span>03</span> TECHNOLOGY </NavLink>

                </ul>
            </nav>

        </header>


    )
}

export default Navbar