import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCrewMember } from '../../services/getCrewMember';

const Member = () => {
    const { name } = useParams();

    const [data, setData] = useState([])


    useEffect(() => {
        getCrewMember(name)
            .then((response) => {
                setData(response)

            })
            .catch((error) => { console.log(error); })

    }, [name])
    return (
        <>
            {data.map((element, index) => (
                <div key={index}>
                    <h1>{element.name}</h1>
                    <p>{element.bio}</p>

                </div>

            ))}

        </>)
}

export default Member