import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/material'

function DashboardLayout({ children }: any) {
    return <>
        <Header />
        <Container>
            {children}
        </Container>

        <Footer />
    </>
}

export default DashboardLayout