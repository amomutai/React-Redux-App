import React from 'react';
import { Box } from '@mui/material';

// Logo.propTypes = {
//   sx: PropTypes.object
// };

export default function Logo({ sx }) {
  return <Box component="img" src="../logo.png" sx={{ width: 100, height: 100, ...sx }} className="logo" />; 
}