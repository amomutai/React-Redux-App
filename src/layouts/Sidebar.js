import React from 'react'
import Logo from '../components/Logo';
import navConfig from '../components/navconfig';
import NavItem from '../components/NavItem';
import { Box, List, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="top">
            <Box sx={{ px: 2.5, py: 3 }}>
              <Box component={Link} to="/" sx={{ display: 'inline-flex' }}>
                <Logo />
              </Box>
            </Box>

            <Box>
              <List disablePadding>
                {navConfig.map((item) => (
                  <NavItem key={item.title} item={item}  />
                ))}
              </List>
            </Box>
          </div>

          <div className="bottom">
            <Box sx={{ px: 2.5, pb: 3, mt: 10 }} className="footer-sidenav">
              <Button
                fullWidth
                href="#"
                variant="contained"
                className="logout-btn"
              >
                Log Out
              </Button>           
              <Typography gutterBottom variant="p" className="copyright-text">
                &copy; Data Integrated Limited 2021
              </Typography>

            </Box>
          </div>

          





          {/* <List disablePadding dense>
            {items.map(({ label, name, ...rest }) => (
              <ListItem key={name} button {...rest}>
                <ListItemText>{label}</ListItemText>
              </ListItem>
            ))}
          </List> */}
        </div>
      )
}

export default Sidebar