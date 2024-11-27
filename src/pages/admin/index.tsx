import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsRoutes from './products'

function AdminPages() {
    return <>
        <Routes>
            <Route path='/products/*' element={<ProductsRoutes />} />
        </Routes>
    </>
}

export default AdminPages