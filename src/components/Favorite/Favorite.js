import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    components: {
        MuiButton: {
           
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              borderColor:'rgba(0, 0, 0, 0.5)',
              color:'#000000',
              padding:0,
              display:'flex',
              maxWidth: '40px', 
              maxHeight: '40px',
              minWidth: '40px',
              minHeight: '40px',
            },
          },
        ],
      },
    },
  });

export default function Favorite(){
    return(
        <ThemeProvider theme={theme}>
            <Button variant="outlined">
                <FavoriteBorder sx={{'&:focus, &:active': {
                color:'#DB4444'}}} />
            </Button>
        </ThemeProvider>
    );
}