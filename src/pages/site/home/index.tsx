import { Typography, Container, Grid2, Card, CardContent, CardMedia, Button, Box, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { baseService } from '../../../api/baseService';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProductItem from './ProductItem';
import { useCallback, useEffect, useState } from 'react';
import Categories from './Categories';

function Home() {

    const [products, setproducts] = useState([])

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return baseService.getAll('api/products')
        },
        staleTime: 20000
    })

    useEffect(() => {
        setproducts(data)
    }, [data])


    let dispatch = useDispatch();
    const { t } = useTranslation()

    const search = (value: any) => {
        let filteredProducts = data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()))
        setproducts(filteredProducts)
    }

    return (
        <div>

            <Container>
                <hr />
                <Typography variant="h4" gutterBottom>
                    {t("popularProducts")}
                </Typography>
                <hr />
                <div>
                    <TextField label="Search" onChange={(e: any) => search(e.target.value)} />
                </div>
                <hr />
                <Grid2 container spacing={4}>
                    {
                        products && products.map((item: any, index: any) => {
                            return <ProductItem key={index} item={item} index={index} dispatch={dispatch} />
                        })
                    }
                </Grid2>
               
                <Categories />
            </Container>
        </div>
    );
}

export default Home;