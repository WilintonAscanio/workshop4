import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSpaceCraft } from '../../services/getSpaceCraft';
import'./spaceCraft.scss'

const SpaceCraft = () => {
    const { nameSpacecraft } = useParams();

    const [data, setData] = useState([])


    useEffect(() => {
        getSpaceCraft(nameSpacecraft)
            .then((response) => {
                setData(response)

            })
            .catch((error) => { console.log(error); })

    }, [nameSpacecraft])
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

export default SpaceCraft