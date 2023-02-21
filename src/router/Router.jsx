import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crew from '../components/crew/Crew'
import Member from '../components/crewMember/Member'
import Destination from '../components/destination/Destination'
import Home from '../components/home/Home'
import InfoHome from '../components/infoHome/InfoHome'
import Planets from '../components/planets/Planets'
import SpaceCraft from '../components/spaceCraft/SpaceCraft'
import Technology from '../components/technology/Technology'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<InfoHome />} />
                    <Route path='destination' element={<Destination />}>

                        <Route path=':namePlanet' element={<Planets />} />

                    </Route>
                    <Route path='crew' element={<Crew />}>
                        <Route path=':name' element={<Member />} />


                    </Route>
                    <Route path='technology' element={<Technology />}>
                        <Route path=':nameSpacecraft' element={<SpaceCraft />} />


                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router