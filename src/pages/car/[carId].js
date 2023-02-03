import Booking from '@/components/booking'
import CarsContainer from '@/components/CarsContainer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Container} from "@mui/material"
import { Typography } from 'antd';

export default function Home() {
    return (
        <Container>
            <Grid container sx={{pt:20}}>
                <Grid item md={6}>
                    <img src="/assets/car.jpeg" />
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Box>
                            <Typography variant="p" sx={{alignText:"center"}}>Name  of the Car</Typography>
                            <Typography sx={{ alignText: "center" }}>More Details of the car</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
