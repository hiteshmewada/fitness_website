import React from 'react'
import { Stack } from '@mui/material';
// react-spinner-loader provides simple React.js spinner component which can be implemented for async wait operation before data load
import {InfinitySpin} from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center"  alignItems="center" width="100%">
        <InfinitySpin color="grey"/>
    </Stack>
  )
}

export default Loader