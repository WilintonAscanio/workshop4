import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCrewMember } from '../../services/getCrewMember';
import Crew from '../crew/Crew';
import './crewMember.scss'
import img from '../../assets/crew/image-mark-shuttleworth.webp'
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
                <section className='crewMember'>
                    <div className='crewMember__info' key={index}>
                        <div className='crewMember__info-h5'>
                            <span>0{element.id} </span><h5>  MEET YOUR CREW</h5>
                        </div>
                        <h4>{element.role}</h4>
                        <h1>{element.name}</h1>
                        <p>{element.bio}</p>
                    </div>
                    <div className='crewMember__img-container'>
                        <figure className='crewMember__img'><img src={element.images.webp} alt={element.name} /></figure>
                    </div>
                </section>

            ))}

        </>)
}

export default Member