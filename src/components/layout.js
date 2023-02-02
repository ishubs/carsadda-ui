import Navbar from './navbar'
import Footer from './footer'
import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function LayoutComponent({ children }) {

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "white" }}>
        <Container maxWidth='lg'>
          <Box>
            {children}
          </Box>
          <Footer />
        </Container>
      </Box>
    </>
  )
}