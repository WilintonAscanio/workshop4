import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getTechnology } from '../../services/getTechnology'

const Technology = () => {
  const [technology, setTechnology] = useState([])
  useEffect(() => {
    getTechnology()
    .then((response) => {
      setTechnology(response)
    })
    .catch((error) => {console.log(error);})
  }, [])
  
  return (
    <>
    <nav>
      <ul>
        {technology.map((ship, index) => (
          <NavLink key={index} to={`${ship.name}`}>{ship.name}</NavLink>

        ))}
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Technology