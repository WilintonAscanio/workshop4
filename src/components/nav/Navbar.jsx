import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss"
import icon from "../../assets/shared/logo.svg"
import iconHamburguer from "../../assets/shared/icon-hamburger.svg"
import iconClose from "../../assets/shared/icon-close.svg"

const Navbar = () => {
    const [hamburguer, setHamburguer] = useState('hidden')
    const [close, setClose] = useState('closeMenu')
    const [open, setOpen] = useState('')

    const openMenu = (icon) => {
        if (icon === "hamburguer") {
            setHamburguer('closeMenu')
            setClose('hidden')
            setOpen('open')

        }
        else {
            setHamburguer('hidden')
            setClose('closeMenu')
            setOpen('')
        }

    }


    return (
        <header className='header'>
            <figure>
                <img src={icon} alt="icon" />
            </figure>
            <small></small>
            <nav className={`header__navBar ${open}`}>
                <ul>
                    <img src={iconClose} alt="cerrar" className={close} onClick={() => openMenu("close")} />

                    <NavLink to='/' className='header__navBar__link'><span>00</span> HOME </NavLink>
                    <NavLink to='destination/Moon' className='header__navBar__link'><span>01</span> DESTINATION </NavLink>
                    <NavLink to='crew' className='header__navBar__link'><span>02</span> CREW </NavLink>
                    <NavLink to='technology' className='header__navBar__link'><span>03</span> TECHNOLOGY </NavLink>

                </ul>
            </nav>
            <img src={iconHamburguer} alt="hamburguer" className={hamburguer} onClick={() => openMenu("hamburguer")} />

        </header>


    )
}

export default Navbar