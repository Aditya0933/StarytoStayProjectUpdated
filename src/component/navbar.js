import React, { useEffect, useState } from 'react';
import {AppBar,CssBaseline,Divider,Drawer,IconButton,List,ListItemIcon,ListItemButton,ListItemText,ListItem, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import {Box,Typography, Button, Stack,Toolbar ,MenuItem,Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Logout from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoginIcon from '@mui/icons-material/Login';
import {Link,  Outlet, useLocation } from 'react-router-dom';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';


function NavBar(props) {

  


const drawerWidth = 240;
const navItems = [{name:'🏠 Home',goto:'/'}, {name:'🐾 Adopt',goto:'/adopt'}, {name:'🌟 Rehome',goto:'/rehome'}, {name:'⛑️ Rescue',goto:'/rescue'},{name:'💌 Contact',goto:'/contact'}];

  const [mobileOpen, setMobileOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isLoggedIn = !!localStorage.getItem('token');
    let userData;
    if(isLoggedIn){
      userData = JSON.parse(localStorage.getItem('user'));
    }


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [confirmLogout, setConfirmLogout] = useState(false);
  const LogOut = () =>{
    setConfirmLogout(true);
  }
  const confirmAndLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAnchorEl(null);
    window.location.href='/StrayToStay-frontend'
    setConfirmLogout(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };
    if (location.pathname === '/contact') {
      const cont = document.getElementById('contactForm');
      if (cont) {
        const topPosition = cont.getBoundingClientRect().top;
        window.scrollTo({
          top: topPosition - 70,
          behavior: 'smooth',
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  


  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <Typography variant="h5" my={2}>
        <PetsIcon /> StrayToStay
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} >
            <Link to={item.goto}>
               <ListItemButton sx={{ textAlign: 'center'}}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Stack direction='row' mt={2} justifyContent='space-around' >
          <Link to='/donate' style={{marginTop:'10px'}}><Button variant="contained" size='medium' color='secondary'>Donate</Button></Link>
          <IconButton
              onClick={handleClick}
              size="medium"
              color='inherit'
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
               {isLoggedIn? (userData.avatar?(<Avatar title={userData.name} alt='user_image' src={userData.avatar}/>):(<Avatar title={userData.name} sx={{ bgcolor:'#ff5722' }}>{userData.name[0].toUpperCase()}</Avatar>)) : (<PersonAddAltIcon style={{fontSize:'30px'}}/>) }
            </IconButton>
      </Stack>
    </Box>
  );



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="tertiory"
        style={{
          background: scrolled || location.pathname !== '/' ? '#272e37' : 'transparent',
          boxShadow: scrolled || location.pathname !== '/' ? '':'none',
          color: scrolled || location.pathname !== '/' ? '#ff8a00' : 'white',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        <Toolbar sx={{height:'70px',display:'flex',justifyContent:'space-between'}}>
          <Box><Typography
            component="div"
            fontWeight={700}
            fontSize='26px'
            sx={{ flexGrow: 1}}
          >
           <PetsIcon style={{marginTop:'-6px', fontSize:'35px'}}/> StrayToStay
          </Typography></Box>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color:'white', mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box width={650} justifyContent='space-between' sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item,index) => (
              <Box key={index} sx={{paddingX:'1rem'}}  className='navBtn'>
                <Link to={item.goto}><Typography  fontWeight={600} height={69} sx={{display:'flex', alignItems:'center'}}  className={` ${location.pathname === item.goto ? 'active-link' : ''}`}>{item.name}</Typography></Link>
              </Box>
            ))}
              {/* <Box  sx={{paddingX:'1rem'}}  className='navBtn'>
                <Typography  fontWeight={600} height={69} sx={{display:'flex', alignItems:'center'}}  className={` ${location.pathname === '/#stories' ? 'active-link' : ''}`}>💌 Contact</Typography>
              </Box> */}
              {/* <Box sx={{paddingX:'1rem'}} onClick={()=>{setIsConatct(true)}}  className='navBtn'>
                <Link to='//#contactForm'><Typography  fontWeight={600} height={69} sx={{display:'flex', alignItems:'center'}}  className={` ${isContact ? 'active-link' : ''}`}>💌 Contact</Typography></Link>
              </Box> */}
          </Box>
          <Stack direction='row' gap={3} mr={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/donate'><Button variant="outlined" size='large' color='inherit'  sx={{textTransform:'none',marginTop:'11px', maxHeight:'42px', fontWeight:'800'}}>Donate</Button></Link>
            <IconButton
              onClick={handleClick}
              size="large"
              color='inherit'
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
               {isLoggedIn? (userData.avatar?(<Avatar title={userData.name} alt='user_image' src={userData.avatar}/>):(<Avatar title={userData.name} sx={{ bgcolor:'#ff5722' }}>{userData.name[0].toUpperCase()}</Avatar>)) : (<PersonAddAltIcon style={{fontSize:'30px'}}/>) }
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {isLoggedIn?(
          <div>
          <MenuItem onClick={handleClose}>
              <Link to='profile' style={{display:'flex'}}>{userData.avatar?(<Avatar alt={userData.name} src={userData.avatar}/>):(<Avatar sx={{ bgcolor:'#ff5722' }}>{userData.name[0].toUpperCase()}</Avatar>)}{userData.name}</Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Link to='/myanimal'>
                <ListItemIcon>
                  <ArrowForwardIosIcon fontSize='small'/>
                </ListItemIcon>
                My Animal
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/myrescue'>
                <ListItemIcon>
                  <ArrowForwardIosIcon fontSize='small'/>
                </ListItemIcon>
                My Rescue
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/mydonation'>
                <ListItemIcon>
                  <ArrowForwardIosIcon fontSize='small'/>
                </ListItemIcon>
                My Donation
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={LogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log Out
            </MenuItem>
        </div>):(
          <div>
            <Link to='/signin'>
              <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <LoginIcon fontSize='small'/>
                  </ListItemIcon>
                  Log In
              </MenuItem>
            </Link>
            <Link to='/signup'>
              <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HowToRegOutlinedIcon fontSize='small'/>
                  </ListItemIcon>
                  Register
              </MenuItem>
            </Link>
          </div>
        )}
      </Menu>
      <Dialog open={confirmLogout} onClose={() => setConfirmLogout(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmLogout(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmAndLogout} color="secondary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
      <Outlet/>
    </Box>
  );
}


export default NavBar;