import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsRoutes from './products'
import Login from './auth/login'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import Dashboard from './dashboard'

function AdminPages() {

    const { isLogin, loading } = useContext(AuthContext) as AuthContextType

    return <>{
        loading ? <h1>Loading...</h1> : isLogin ?
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='products/*' element={<ProductsRoutes />} />
            </Routes>
            :
            <Routes>
                <Route path='login' element={<Login />} />
            </Routes>
    }
    </>
}

export default AdminPages