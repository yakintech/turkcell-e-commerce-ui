import {Typography, Container, Grid2, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { baseService } from '../../../api/baseService';
import { useDispatch } from 'react-redux';
import Header from '../../../components/layout-components/site/header';

function Home() {


    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return baseService.getAll('api/products')
        },
        staleTime: 20000
    })

    let dispatch = useDispatch();

    return (
        <div>
            <Header/>
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
                                    <Button onClick={() => dispatch({type:"cart/addToCart", payload:item})} size="small" color="primary">
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