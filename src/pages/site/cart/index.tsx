import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Header from '../../../components/layout-components/site/header';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, total } = useSelector((state: any) => state.cartSlice);

    const handleIncrease = (id: string) => {
        dispatch({ type: 'cart/increase', payload: id });
    };

    const handleDecrease = (id: string) => {
        dispatch({ type: 'cart/decrease', payload: id });
    };

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Sepetiniz
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Toplam: {total.toFixed(2)} TL
                </Typography>
                <Grid container spacing={4}>
                    {cart.map((item: any) => (
                        <Grid item key={item._id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Miktar: {item.quantity}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Birim Fiyat: {item.unitPrice.toFixed(2)} TL
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Toplam: {(item.unitPrice * item.quantity).toFixed(2)} TL
                                    </Typography>
                                    <IconButton onClick={() => handleIncrease(item._id)} color="primary">
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDecrease(item._id)} color="secondary">
                                        <RemoveIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <hr />
                <Button onClick={() => dispatch({ type: 'cart/empty' })} variant="outlined" color="error">
                    Sepeti Boşalt
                </Button>
            </Container>
        </>
    );
};

export default Cart;