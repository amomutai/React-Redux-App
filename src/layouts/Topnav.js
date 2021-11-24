import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'; //user-avatar-filled-alt
import avatarFill from '@iconify/icons-eva/person-fill';
import { styled } from '@mui/material/styles';
import { ListItemIcon } from '@mui/material';
import { Icon } from '@iconify/react';

export default function Topnav() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="nav-title">
        <Toolbar variant="dense" className="nav-content" >
          <Typography variant="h4" color="inherit" component="div" className="left">
            Photos
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'center', alignItems: 'center'}} className="right">
            <Icon icon="eva:person-fill"  className="avatar" iconStyles ={{width: 3, height: 3}}/> 
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1em',justifyContent: 'center', alignItems: 'center'}} >
                <Typography sx={{margin: '0', fontWeight: '600'}} variant="subtitle2" gutterBottom component="div">
                    Grace Njeri 
                    {/* Input a name props or something */}
                </Typography>
                <Typography sx={{opacity: '0.5', fontWeight: '600'}} variant="caption" display="block"  gutterBottom>
                    Admin
                </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}