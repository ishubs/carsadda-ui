import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="autp"
                width="100%"
                image="/assets/car.jpeg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>

            </CardContent>
            <Grid container justifyContent={'space-around'}>
                <Typography sx={{ p: 2 }}>Rs 1000</Typography>
                <Grid item>
                    <Button size="medium" variant="contained">Book Now</Button>
                </Grid>
            </Grid>
        </Card >
    );
}
