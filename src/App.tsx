import React from 'react'
import AdminPages from './pages/admin'
import { Route, Routes } from 'react-router-dom'

function App() {
  return <>
    <Routes>
      <Route path='/admin/*' element={<AdminPages />} />
    </Routes>
  </>
}

export default App