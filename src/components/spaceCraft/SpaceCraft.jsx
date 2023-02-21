import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSpaceCraft } from '../../services/getSpaceCraft';

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
    <>
            {data.map((element, index) => (
                <div key={index}>
                    <h1>{element.name}</h1>
                    <p>{element.description}</p>

                </div>

            ))}

        </>

    )
}

export default SpaceCraft