import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {createTheme,ThemeProvider } from '@mui/material/styles';
import style from './FooterBody.module.css';
import img1 from './FooterImages/Qrcode 1.png';
import img2 from './FooterImages/wallets-text-label-logo.png';
import img3 from './FooterImages/download-appstore.png';

const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: '16px',
        fontWeight: 400,
      },
      subtitle2: {
        fontWeight: 500,
        fontSize:'20px'
      },
      body1: {
        fontWeight: 700,
        fontSize:'24px'
      },
      body2: {
        fontWeight: 400,
        fontSize:'16px'
      },
      caption:{
        fontWeight: 500,
        fontSize:'12px',
        color:'#828282',
      },
    },
  });

export default function FooterBody(){
    return(
        <div className={style.footerBody}>
            <Grid container direction="row" justifyContent="center" spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={8} sm={4} md={3} lg={3}>
                <ThemeProvider theme={theme}>
                    <Typography variant='body1' gutterBottom>Exclusive</Typography>
                    <Typography variant='subtitle2'gutterBottom>Subscribe</Typography>
                    <Typography variant='body2'>Get 10% off your first order</Typography>
                </ThemeProvider>
                    <Box>
                        <TextField
                        sx={{'& .MuiOutlinedInput-root': { border: '1px solid #ced4da',width:'80%',height:'48px',mt:'1.5em'},'&:focus': {
                            border: '1px solid #ced4da',
                           
                          }}}
                          inputProps = {{sx: {'&::placeholder': {color: '#828282',opacity: 1,},}, }}
                                hintText="Email"
                                floatingLabelText="Email"
                                type="email"
                                placeholder="Enter your email"
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end" sx={{color:'white'}}>
                                         <IconButton color="white" size="large">
                                            <SendOutlinedIcon fontSize="inherit" sx={{color:'#FAFAFA'}}/>
                                          </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                    </Box>
                </Grid>
                <Grid item xs={8} sm={4} md={2} lg={2}>
                <ThemeProvider theme={theme}>
                    <Typography variant='subtitle2'gutterBottom>Support</Typography>
                    <Typography variant='subtitle1'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
                    <Typography variant='subtitle1'>exclusive@gmail.com</Typography>
                    <Typography variant='subtitle1'>+88015-88888-9999</Typography>
                </ThemeProvider>
                </Grid>
                <Grid item xs={8} sm={4} md={2} lg={2}>
                <ThemeProvider theme={theme}>
                    <Typography variant='subtitle2'gutterBottom>Account</Typography>
                    <Typography variant='subtitle1'>My Account</Typography>
                    <Typography variant='subtitle1'>Login / Register</Typography>
                    <Typography variant='subtitle1'>Cart</Typography>
                    <Typography variant='subtitle1'>Wishlist</Typography>
                    <Typography variant='subtitle1'>Shop</Typography>
                </ThemeProvider>
                </Grid>
                <Grid item xs={8} sm={4} md={2} lg={2}>
                <ThemeProvider theme={theme}>
                    <Typography variant='subtitle2'gutterBottom>Quick Link</Typography>
                    <Typography variant='subtitle1'>Privacy Policy</Typography>
                    <Typography variant='subtitle1'>Terms Of Use</Typography>
                    <Typography variant='subtitle1'>FAQ</Typography>
                    <Typography variant='subtitle1'>Contact</Typography>
                </ThemeProvider>
                </Grid>
                <Grid item xs={8} sm={8} md={3} lg={3}>
                <ThemeProvider theme={theme}>
                    <Typography variant='subtitle2'gutterBottom>Download App</Typography>
                    <Typography variant='caption'>Save $3 with App New User Only</Typography>
                </ThemeProvider>
                    <Box sx={{display:'flex',gap:1,mt:'.5em'}}>
                        <Box>
                            <img height='100%' src={img1}/>
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <img src={img2}/>
                            <img src={img3}/>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between',width:'50%',mt:'2em'}}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}