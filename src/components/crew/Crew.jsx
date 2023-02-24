import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { getCrew } from '../../services/getCrew';
import './crew.scss';
const Crew = () => {
  const [crew, setCrew] = useState([])

  const [width, setWidth] = useState(window.innerWidth)

  const changeScreen = () => {
    setWidth(window.innerWidth)
  }
  window.addEventListener('resize', changeScreen)

  useEffect(() => {
    getCrew()
      .then((response) => {
        setCrew(response);
      })
      .catch((error) => console.log(error));

  }, [])
  if (width > 990) {
    return (
      <>
        <section className='crew'>
          <Outlet />
          <nav>
            <ul>
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
  else{
    return (
      <>
        <section className='crew'>
          <nav>
            <ul>
              {crew.map((member, index) => (
  
                <NavLink to={`${member.name}`} key={index} className='crew__nav'>
                  <button id={member.name} value={member.name} />
                </NavLink>
  
              ))}
            </ul>
          </nav>
          <Outlet />

        </section>
      </>
  
  
    )
  }
 
}

export default Crew