import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
// import HeroBannerImage from '../assets/main_page.jpeg'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2635" fontWeight="600" fontSize="26px">
            <h1>Fitness Fever</h1>
        </Typography>
        {/* The sx prop lets you style elements inline, using values from your theme. */}
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Work Sweat Smile <br />
            And Repeat
        </Typography>
        <Typography  fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FC2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore more Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FC2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Fitness
    </Typography>
    <img src="https://source.unsplash.com/2400x700/?muscularmodel,fitness,exercise" alt="hero-banner" className="hero-banner-img" />
    {/* <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
    </Box>
  )
}

export default HeroBanner