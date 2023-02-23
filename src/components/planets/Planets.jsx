import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getPlanet } from '../../services/getPlanet'
import "./planets.scss"


const Planets = () => {

    const { namePlanet } = useParams();

    const [data, setData] = useState([])




    useEffect(() => {
        getPlanet(namePlanet)

            .then((response) => {
                setData(response)


            })
            .catch((error) => { console.log(error); })

    }, [namePlanet])





    return (
        <article className='planet'>

            {data.map((element, index) => (
                <div key={index} className='planet__main'>
                    <figure>
                        <img src={element.images.png} alt="planeta" />
                    </figure>
                    <section className='planet__main__description'>
                        <h1>{element.name.toUpperCase()}</h1>
                        <p>{element.description}</p>
                        <hr />

                        <section>
                            <div>
                                <small>AVG. DISTANCE</small>
                                <p>{element.distance.toUpperCase()}</p>
                            </div>
                            <div>
                                <small>EST. TRAVEL TIME</small>
                                <p>{element.travel.toUpperCase()}</p>
                            </div>
                        </section>

                    </section>



                </div>

            ))}

        </article>


    )
}

export default Planets