import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { getCrew } from '../../services/getCrew';
import './crew.scss';
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
      <section className='crew'>
        <nav>
          <ul>
            <Outlet />
            {crew.map((member, index) => (

              <NavLink to={`${member.name}`} key={index} className='crew__nav'>
                <button id={member.name} value={member.name} />
              </NavLink>

            ))}
          </ul>
        </nav>
      </section>
    </>


  )
}

export default Crew