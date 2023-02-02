import Booking from '@/components/booking'
import CarsContainer from '@/components/CarsContainer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid xs={12} md={12}>
                <Booking />
            </Grid>
            <Grid>
                <CarsContainer />
            </Grid>
        </Grid>
    )
}
