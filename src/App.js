import React from 'react'
// To install npm install -S react-router-dom
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
// Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed library of React UI components. MUI Base is our library of "unstyled" components and low-level hooks.

import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App