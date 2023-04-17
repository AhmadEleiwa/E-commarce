import Typography from '@mui/material/Typography';
export default function ProductName({prouctName}){
    return(
        <Typography component="h2" sx={{fontSize:'24px',lineHeight:'24px',fontWeight:'600',textAlign:'left',mb:'1em'}}>{prouctName}</Typography>
    );
}