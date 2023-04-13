import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const Title = props =>{
    return <Typography sx={{fontSize:'36px'}} variant='h1'>
        {props.children}
    </Typography>
}


export default Title