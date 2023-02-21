import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getPlanet } from '../../services/getPlanet'
// import img from "../../assets/destination/image-moon.png"

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
        <>
            {data.map((element, index) => (
                <div key={index}>
                    <figure>
                        <img src={element.images.png} alt="imagen" />
                    </figure>
                    <h1>{element.name}</h1>
                    <p>{element.description}</p>

                </div>

            ))}

        </>
    )
}

export default Planets