import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSpaceCraft } from '../../services/getSpaceCraft';
import './spaceCraft.scss'

const SpaceCraft = () => {
    const { nameSpacecraft } = useParams();

    const [data, setData] = useState([])

    const [width, setWidth] = useState(window.innerWidth)

    const changeScreen = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener("resize", changeScreen)


    useEffect(() => {
        getSpaceCraft(nameSpacecraft)
            .then((response) => {
                setData(response)

            })
            .catch((error) => { console.log(error); })

    }, [nameSpacecraft])

    if (width > 1000) {
        return (
            <article className='space'>
                {data.map((element, index) => (
                    <div key={index}>
                        <section>
                            <h4><span>THE TERMINOLOGY</span></h4>
                            <h1>{element.name.toUpperCase()}</h1>
                            <p>{element.description}</p>
                        </section>
                        <figure><img src={element.images.portrait} alt="ship" /></figure>
                    </div>

                ))}


            </article>
        )

    }
    return (
        <article className='space'>
            {data.map((element, index) => (
                <div key={index}>
                    <figure>
                        <img src={element.images.landscape} alt="ship" />
                        </figure>
                    <section>
                        <h4><span>THE TERMINOLOGY</span></h4>
                        <h1>{element.name.toUpperCase()}</h1>
                        <p>{element.description}</p>
                    </section>
                </div>

            ))}


        </article>
    )

}

export default SpaceCraft