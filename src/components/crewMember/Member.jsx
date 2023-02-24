import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCrewMember } from '../../services/getCrewMember';
import './crewMember.scss'
const Member = () => {
    const { name } = useParams();

    const [data, setData] = useState([])

    const [width, setWidth] = useState(window.innerWidth)

    const changeScreen = () => {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeScreen)



    useEffect(() => {
        getCrewMember(name)
            .then((response) => {
                setData(response)

            })
            .catch((error) => { console.log(error); })

    }, [name])
    if (width > 990) {
        return (
            <>
                {data.map((element, index) => (
                    <section className='crewMember'>
                        <div className='crewMember__info' key={index}>
                            <div className='crewMember__info-h5'>
                                <span>02 </span><h5>  MEET YOUR CREW</h5>
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
    else {
        return (
            <>
                {data.map((element, index) => (
                    <section className='crewMember' key={index}>
                        <div className='crewMember__info-h5'>
                                <span>02 </span><h5>  MEET YOUR CREW</h5>
                            </div>
                        <div className='crewMember__img-container'>
                            <figure className='crewMember__img'><img src={element.images.webp} alt={element.name} /></figure>
                        </div>
                        <div className='crewMember__info' key={index}>
                            
                            <h4>{element.role}</h4>
                            <h1>{element.name}</h1>
                            <p>{element.bio}</p>
                        </div>
                        
                    </section>
    
                ))}
    
            </>)
    }
    
}

export default Member