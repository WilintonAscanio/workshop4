import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getDestination } from '../../services/getDestination'


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
        <article>
            <div>
                <h1>Title</h1>
                <figure>
                    <img src="" alt="planeta" />
                </figure>


            </div>
            <div>
                <nav>
                    <ul>
                        {destination.map((planet, index) =>(
                            <NavLink to={`${planet.name}`} key={index}
                            description={planet.description}
                            images={planet.images}
                            travel={planet.travel}
                            distance={planet.distance}
                            name={planet.name}
                            >{planet.name}</NavLink >
                        ))}
                        

                    </ul>
                </nav>
                <Outlet />
            </div>
        </article>
    )
}

export default Destination