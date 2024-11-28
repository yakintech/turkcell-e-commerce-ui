import React from 'react'
import AdminPages from './pages/admin'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/site/home'
import Cart from './pages/site/cart'

function App() {
  return <>
    <Routes>
      <Route path='/admin/*' element={<AdminPages />} />
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </>
}

export default App