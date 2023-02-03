import React from 'react';
import Rangepicker from './Rangepicker'
import Booking from './booking';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { FormControl, MenuItem,Select, InputLabel } from "@mui/material"
export default function banner() {
  return (
    // <Row justify="space-around" style={{ background: "white", padding: "1.5rem", paddingTop: "10rem", paddingBottom: "10rem" }} >
    //   <Col span={12} xs={{ order: 2, span: 24 }} md={{ order: 2, span: 12 }} order={1} style={{ padding: "2rem" }}>
    //     <Row span={8} justify="center">

    //       <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    //         <Row>
    //           <Booking />
    //         </Row>
    //         <Row span={12}><Button type="primary" >View Cars</Button></Row>


    //       </Space>
    //     </Row>
    //   </Col>
    //   <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }} order={2} span={12} style={{ justifyContent: "center", display: "flex", alignItems: "center", padding: "1.5rem" }}>
    //     <img height={"auto"} width={"100%"} src="/assets/car.jpeg" />
    //   </Col>
    // </Row>
    
    <Grid container direction='row' sx={{ backgroundColor: "White", height: "100vh" }}>
      <Grid item xs={12} sm={6} sx={{ alignItems: "center", display: "flex", p: 5 }}>
        <Card title="" sx={{p:2}}>
          <Typography sx={{py:4}} variant="h5">Book Your Happy Ride Now</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Place</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"Hyderabad"}
              label="Place"
              onChange={()=>{}}
            >
              <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>

            </Select>
          </FormControl>
          <Booking />
        </Card>
      </Grid>
      <Grid item sx={{ p: 5, mt: 20, mb: 20, display: { xs: 'none', sm: 'flex' } }}  sm={6}>
        <img height={"auto"} style={{alignSelf:"center"}} width={"100%"} src="/assets/car.jpeg" />
      </Grid>
    </Grid>


  )
}