
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { Fragment, useMemo, useRef } from 'react';

function Categories() {



    const categories = ['Elektronik', 'Spor', 'Moda', 'Ev & Yaşam', 'Kitap'];

    let boxRef = useRef(null);

    const getTime = () => {
        let now = new Date();
        let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        return time;
    }

    const data = useMemo(() => getTime(), [])


    const hideShow = () => {
        let boxElement = boxRef.current! as any;
        if (boxElement.style.display === "none") {
            boxElement.style.display = "block";
        } else {
            boxElement.style.display = "none";
        }
    }
    return <>

        {/* <Typography variant="h6" gutterBottom>
            {data}
        </Typography> */}
        <hr />
        <Button onClick={hideShow} variant="outlined" color="primary">
            Hide-Show
        </Button>

        <div ref={boxRef}>
            <Grid style={{ marginTop: 10, marginBottom: 10 }} container spacing={3}>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} className="category-box">
                            <Typography variant="h6" component="div">
                                {category}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    </>
}

export default Categories