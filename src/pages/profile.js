import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { Box, Grid, Typography, Rating, Tabs, Tab, useMediaQuery } from '@mui/material'
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
export default function Profile() {
    const [value, setValue] = React.useState(0);
    const mediumViewport = useMediaQuery('(min-width:768px)');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{height:"100vh"}}>
            <Grid container sx={{ pt: 5, height: "100vh", display: "flex", justifyContent: "center" }}>
                <Grid sx={{ display: "flex", justifyContent: "center" }} sm={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/assets/demoavatar.jpeg"
                        sx={{ width: 150, height: 150 }}
                    />
                </Grid>
                <Grid sx={{ textAlign:{xs:"center",sm:"left"} ,padding:{xs:0,sm:3}}} sm={10}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Remy Sharp</Typography>
                    <Rating name="read-only" value={4.5} readOnly />
                    <Typography variant="p" sx={{ display: "block", color: "grey" }} md={8} >Remy Sharp Remy Sharp Remy Sharp Remy</Typography>
                    <Typography variant="p" sx={{ display: "block", color: "grey" }} md={8} >Remy Sharp Remy Sharp Remy Sharp Remy</Typography>
                </Grid>
                <Grid sx={{ maxWidth: { xs: 320, sm: 600, md: 800 }, bgcolor: 'background.paper' }} xs={12} sm={2}>
                    <Box>
                        <Tabs
                            orientation={mediumViewport ? "vertical" : "horizontal"}
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider', mt: 3 }}>
                            <Tab xs={12} label="Details" {...a11yProps(0)} />
                            <Tab xs={12} label="Documents" {...a11yProps(1)} />
                            <Tab xs={12} label="Reset Password" {...a11yProps(2)} />
                            <Tab xs={12} label="Refer Friends" {...a11yProps(3)} />
                            <Tab xs={12} label="CL Wallet" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid sm={10} sx={{p:5}}>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Grid>
                


            </Grid>

        </Box>

    )
}