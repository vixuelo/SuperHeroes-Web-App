import React from 'react'
import { NavBar } from '../UI'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroePage, MarvelPage, DcPage} from '../heroes/'
import { SearchPage } from '../UI/Pages/SearchPage'
import { LoginPage } from '../auth'
import { QueryPage } from '../UI/Pages/QueryPage'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className='p-5'>

          <Routes>
              <Route path="marvel" element={<MarvelPage/>}/>
              <Route path="/dc" element={<DcPage/>}/>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="heroe/:heroeID" element={<HeroePage/>}/>
              <Route path="search/query/:qContent" element={<QueryPage/>}/>

              
             
              
              <Route path="login" element={<LoginPage/>}/>
              <Route path="/" element={<Navigate to="login"/>}/>

          </Routes>
        
        </div>
    </>
  )
}
