import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Stack } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const { cartSlice, clientAuthSlice } = useSelector((state: any) => state)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(clientAuthSlice)

    return <AppBar position="static">
        <Toolbar>
            <Stack style={{ width: "100%" }} direction="row" justifyContent="space-between" alignItems={"flex-end"}>
                <Stack direction={"row"}>
                    <Typography variant="h6">
                        <Link style={{ color: "white" }} to={"/"}> Turkcell E-Commerce </Link>
                    </Typography>
                    <Button style={{ marginLeft: 50 }} color="inherit"><Link style={{ color: "white" }} to={"/cart"}>Sepet</Link></Button>
                </Stack>
                <Stack direction={"row"}>
                    {
                        clientAuthSlice.isClientAuthenticated ? <>
                            <Stack direction={"column"}>
                                <h2>{clientAuthSlice.clientEmail}</h2>
                                <button onClick={() => dispatch({type:"clientAuth/setClientAuth", payload:{isClientAuthenticated:false}})}>Logout</button>
                            </Stack>
                        </> : <Button color="inherit" onClick={() => navigate("/login")}>Giriş Yap</Button>
                    }
                    <IconButton color="inherit">
                        <Badge badgeContent={cartSlice.cart.length} color="error">
                            <Link style={{ color: "white" }} to={"/cart"}><ShoppingCartIcon /></Link>
                        </Badge>
                    </IconButton>
                </Stack>
            </Stack>
        </Toolbar>
    </AppBar>
}

export default Header