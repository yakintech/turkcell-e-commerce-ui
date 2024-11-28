import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Cart from './cart'
import SiteLayout from '../../components/layout-components/site'
import Login from './auth/Login'

function SitePages() {
  return <>
    <SiteLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </SiteLayout>

  </>
}

export default SitePages