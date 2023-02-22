import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { getDestination } from '../../services/getDestination'
import "./destination.scss"


const Destination = () => {

    const [destination, setDestination] = useState([])


    useEffect(() => {
        getDestination()
            .then((response) => {
                setDestination(response);
            })
            .catch((error) => console.log(error));

    }, [])
    return (
        <article className='destination'>
            <p><span>01</span>PICK YOUR DESTINATION</p>
            <section className='destination__nav'>
                <nav>
                    <ul>
                        {destination.map((planet, index) => (
                            <NavLink to={`${planet.name}`} key={index} className='destination__nav__link'>{planet.name.toUpperCase()}</NavLink >

                        ))}


                    </ul>
                </nav>
                <Outlet />
            </section>




        </article>
    )
}

export default Destination