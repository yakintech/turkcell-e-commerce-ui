import  { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsRoutes from './products'
import Login from './auth/login'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import Dashboard from './dashboard'
import DashboardLayout from '../../components/layout-components/admin'


function AdminPages() {

    const { isLogin, loading } = useContext(AuthContext) as AuthContextType

    return <>{
        loading ? <h1>Loading...</h1> : isLogin ?
            <>
                <DashboardLayout>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/products/*' element={<ProductsRoutes />} />
                    </Routes>
                </DashboardLayout>
            </>
            :
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Login />} />
            </Routes>
    }
    </>
}

export default AdminPages