import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Ecommerce from '../../pages/Ecommerce'

const RoutesApp: React.FC = () => {
  return (
    <>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Ecommerce/>} path='/productos'/>
        </Routes>
    </>
  )
}

export default RoutesApp