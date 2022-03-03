import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
const Nav = () => {
   
  return (

    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="string"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Student
          </IconButton>
          <Button component={Link} to="/" color='inherit'>
  ShowAll
</Button>
         
          <Button component={Link} to="/register" color='inherit'>
  Register
</Button>
          {/* <Link  to="/">Show all</Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav