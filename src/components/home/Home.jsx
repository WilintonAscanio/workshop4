import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getDestination } from '../../services/getDestination'
import Navbar from '../nav/Navbar'
import "./home.scss"

const Home = () => {

  return (

    <>
      <Navbar />
      <Outlet />
    </>

  )
}

export default Home