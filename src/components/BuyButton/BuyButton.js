import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    components: {
        MuiButton: {
           
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              // marginRight:'52px',
              marginRight:'1em',
              border:0,
              backgroundColor:'#DB4444',
              color:'#FFFF',
              display:'flex',
              maxWidth: '165px', 
              maxHeight: '44px',
              // minWidth: '165px',
              minWidth:'35%',
              minHeight: '44px',
              '&:hover': {
                backgroundColor:'#DB4444',
                color:'#FFFF',
            }
            },
          },
        ],
      },
    },
  });
export default function BuyButton(){
    return(
     <ThemeProvider theme={theme}>
        <Button variant="contained">Buy Now</Button>
    </ThemeProvider>
    );
}