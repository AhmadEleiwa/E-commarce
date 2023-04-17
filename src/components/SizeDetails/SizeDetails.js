import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
              maxWidth: '32px', 
              maxHeight: '32px',
              minWidth: '32px',
              minHeight: '32px',
              '&:hover':{
                borderColor: '#DB4444',
                backgroundColor:'#FFFF',
              },
              '&:focus, &:active': {
                backgroundColor: '#DB4444',
                color:'#FFFF',
                opacity:1,

              },
              
            },
          },
        ],
      },
    },
  });




export default function SizeDetails(){

    return(
    <Box sx={{display:'flex',alignItems:'center',mt:'24px'}}>
        <Typography component="h2" sx={{mr:'1em',fontSize:'20px',letterSpacing:'0.03em'}}>Size:</Typography>
        <Stack spacing={2} direction="row">
        <Size size="XS"/>
        <Size size="S" />
        <Size size="M" />
        <Size size="L" />
        <Size size="XL"/>
        </Stack>
    </Box>
    );
}

function Size({size}){
    return(
        <ThemeProvider theme={theme}>
            <Button variant= "outlined">{size}</Button>
        </ThemeProvider>
    );
}