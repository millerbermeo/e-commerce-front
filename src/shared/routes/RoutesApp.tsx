import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Ecommerce from '../../pages/Ecommerce'
import RegisterUserPage from '../../pages/RegisterUserPage'

const RoutesApp: React.FC = () => {
  return (
    <>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Ecommerce/>} path='/productos'/>
            <Route element={<RegisterUserPage/>} path='/registrar-usuarios'/>
        </Routes>
    </>
  )
}

export default RoutesApp