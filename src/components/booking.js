import Paper from '@mui/material/Paper';
import Card from './Card'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React from 'react'
import TextField from '@mui/material/TextField';
import moment from 'moment';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Link from 'next/link';
export default function Booking() {
    const [value, setValue] = React.useState(moment('2022-04-07'))
    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: 'column', alignItems: "center" }}>
                {/* <Grid><Typography variant="h4">Book Your Happy Ride</Typography></Grid> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container
                        alignItems="center"
                        justifyContent="center" xs={12}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Pickup"
                            value={value}

                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Pickup"
                            value={value}

                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Grid xs={6}
                            sx={{ justifyContent: "center", display: "grid" }}
                            sm={2} ><Link href="/booking" ><Button variant='contained'>Modify</Button></Link></Grid>

                    </Grid>
                </LocalizationProvider>
            </Box>
        </Box>
    )
}
