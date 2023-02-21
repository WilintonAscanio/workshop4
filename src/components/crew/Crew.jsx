import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { getCrew } from '../../services/getCrew';
import "./crew.scss"

const Crew = () => {
  const [crew, setCrew] = useState([])

  useEffect(() => {
    getCrew()
        .then((response) => {
            setCrew(response);
            console.log(response);
        })
        .catch((error) => console.log(error));

}, [])
  return (
    <>
     <nav>
      <ul>
        {crew.map((member, index) => (
        
        <NavLink to={`${member.name}`} key={index}>{member.name}</NavLink>


        ))}
      </ul>
    </nav>
    <Outlet />
    </>
   

  )
}

export default Crew