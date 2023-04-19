import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import style from './Navbar.module.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar(){
  return(
    <PrimarySearchAppBar />
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '21ch',
    },
    '&:focus': {outline: 0,boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)'}
    

  
  },
  
}));

function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }; 
  
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Manage My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Order</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Cancellations</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Reviews</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height:"94px",boxShadow:0,backgroundColor:"#FFFFFF",borderBottom:"1px solid #F5F5F5"}}>
        <Toolbar sx={{height:"94px", alignItems: 'center'}}>
        <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 ,display:{lg:'none',md:'flex',xs:'flex'}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: {lg:'flex', md:'flex',xs: 'none' },ml:"3em" ,fontWeight:700,color:"black",fontSize: '24px',width:'fit-content'}}>
            Exclusive
          </Typography>
          <Box sx={{ display:'flex',alignItems: 'center',justifyContent:'space-between', bgcolor: 'primary',ml:'130px',width: '367px'  }} >
            <Link style={{textDecoration:"none", color:'#000000'}}  to='/' className={style.NavLink}  >Home</Link>
            <Link  style={{textDecoration:"none", color:'#000000'}} href="#contact" className={style.NavLink} >Contact</Link>
            <Link  style={{textDecoration:"none", color:'#000000'}} href="#about"  className={style.NavLink} >About</Link>
            <Link  style={{textDecoration:"none", color:'#000000'}} href="#signup" className={style.NavLink} >Sign Up</Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{display:'flex',backgroundColor:"#F5F5F5",color:"#000000","&:hover": {backgroundColor: '#F5F5F5'}}}>
            <StyledInputBase
              placeholder="What are you looking for? "
              inputProps={{ 'aria-label': 'search' }} 
            />
          <SearchIconWrapper >
                <SearchIcon />
          </SearchIconWrapper>
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' },mr:'2em' ,color:"#000000"}}>
            <IconButton 
             size="large"
             aria-label="show 4 new mails" 
             color="inherit"
             >
                <FavoriteBorderOutlinedIcon />
            </IconButton>

            <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <ShoppingCartOutlinedIcon />
            </IconButton>

            <IconButton 
             onClick={handleProfileMenuOpen} 
             aria-controls={menuId} 
             size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true" 
              color="inherit"
              >
              <PermIdentityOutlinedIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}







