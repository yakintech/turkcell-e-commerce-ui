import React, { useEffect } from 'react'
import AdminPages from './pages/admin'
import { Route, Routes } from 'react-router-dom'
import SitePages from './pages/site'
import { useDispatch } from 'react-redux'

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'cart/loadCart' })
  }, [])
  

  return <>
    <Routes>
      <Route path='/admin/*' element={<AdminPages />} />
      <Route path='/*' element={<SitePages />} />
    </Routes>
  </>
}

export default App