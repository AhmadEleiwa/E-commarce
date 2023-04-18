import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './ColoursDetails.module.css';
export default function ColoursDetails(){
    return(
    <Box className={style.colorsBox} sx={{display:'flex',alignItems:'center',mt:'3em'}}>
        <Typography component="h2" sx={{mr:'1em',fontSize:'20px',letterSpacing:'0.03em'}}>Colours:</Typography>
        <Stack spacing={2} direction="row">
            <Colours color='#A0BCE0'/>
            <Colours color='#E07575'/>
        </Stack>
    </Box>
    );
}
function Colours({color}){
    return(
       <button className={style.btnColor} style={{ background: `${color}`}}></button>
    );
}