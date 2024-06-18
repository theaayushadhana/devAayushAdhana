
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = [
  
  { name: 'Home', path: '/home' },
  { name: 'Courses', path: '/homePage' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',  bgcolor: '#000'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/home"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEVELOPER AAYUSHWEB
          </Typography>
        </Box>

        {/* Menu for small screens (mobile) */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography component={Link} to={page.path}>{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menu for large screens (desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{ mx: 1, color: 'white', textTransform: 'uppercase' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {/* User Avatar and Settings */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Developer Aayush Website">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Avatar" src="image.jpg" />
            </IconButton>
          </Tooltip>
          {/* <Menu
            id="user-menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          > */}
            {/* Replace with your user settings options */}
            {/* <MenuItem onClick={handleCloseUserMenu}>
              <Typography>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography>Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography>Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography>Logout</Typography>
            </MenuItem> */}
          {/* </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
