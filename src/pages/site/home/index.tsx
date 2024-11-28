import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid2, Card, CardContent, CardMedia, Button, IconButton, Stack, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useQuery } from '@tanstack/react-query';
import { baseService } from '../../../api/baseService';

function Home() {


    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return baseService.getAll('api/products')
        },
        staleTime: 20000
    })

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        E-Ticaret Sitesi
                    </Typography>
                    <Button color="inherit">Giriş</Button>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Popüler Ürünler
                </Typography>
                <Grid2 container spacing={4}>
                    {
                        data && data.map((item: any, index: any) => {
                            return <Box key={index}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        width={350}
                                        image={`https://via.placeholder.com/150?text=Ürün+${index + 1}`}
                                        alt={`Ürün ${index + 1}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.unitPrice.toFixed(2)} TL
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" color="primary">
                                        Sepete Ekle
                                    </Button>
                                </Card>
                            </Box>
                        })
                    }
                </Grid2>
            </Container>
        </div>
    );
}

export default Home;