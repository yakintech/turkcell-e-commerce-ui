import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Stack } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

    const { cartSlice } = useSelector((state: any) => state)
    console.log("cartSlice", cartSlice)

    return <AppBar position="static">
        <Toolbar>
            <Stack style={{width:"100%"}} direction="row" justifyContent="space-between" alignItems={"flex-end"}>
                <Stack direction={"row"}>
                    <Typography variant="h6">
                       <Link style={{color:"white"}} to={"/"}> Turkcell E-Commerce </Link>
                    </Typography>
                    <Button style={{marginLeft:50}} color="inherit"><Link style={{color:"white"}} to={"/cart"}>Sepet</Link></Button>
                </Stack>
                <Stack direction={"row"}>
                    <Button color="inherit">Giriş</Button>
                    <IconButton color="inherit">
                        <Badge badgeContent={cartSlice.cart.length} color="error">
                            <Link style={{color:"white"}} to={"/cart"}><ShoppingCartIcon /></Link>
                        </Badge>
                    </IconButton>
                </Stack>
            </Stack>
        </Toolbar>
    </AppBar>
}

export default Header