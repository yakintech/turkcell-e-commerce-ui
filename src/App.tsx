import React from 'react'
import AdminPages from './pages/admin'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/site/home'

function App() {
  return <>
    <Routes>
      <Route path='/admin/*' element={<AdminPages />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </>
}

export default App