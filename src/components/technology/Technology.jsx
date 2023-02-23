import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getTechnology } from '../../services/getTechnology'
import './technology.scss'

const Technology = () => {
  const [technology, setTechnology] = useState([])
  useEffect(() => {
    getTechnology()
      .then((response) => {
        setTechnology(response)
      })
      .catch((error) => { console.log(error); })
  }, [])

  return (

    <article className='technology'>
      <p><span>03</span>SPACE LAUNCH 101</p>
      <section>
      <nav>
        <ul>
          {technology.map((ship, index) => (
            <NavLink className='technology__link' key={index} to={`${ship.name}`}><button>{index + 1}</button></NavLink>

          ))}
        </ul>
      </nav>
      <Outlet />
    </section>
    </article>
  )
}

export default Technology