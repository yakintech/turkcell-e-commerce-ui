import React, { useEffect } from 'react'
import AdminPages from './pages/admin'
import { Route, Routes } from 'react-router-dom'
import SitePages from './pages/site'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import { checkUserAuth } from './store/features/auth/ClientAuthSlice'

function App() {


  let dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch({ type: 'cart/loadCart' })
    dispatch(checkUserAuth())
  }, [])


  return <>
    <Routes>
      <Route path='/admin/*' element={<AdminPages />} />
      <Route path='/*' element={<SitePages />} />
    </Routes>
  </>
}

export default App