import {Typography } from "@mui/material"
import './style.css'
const Title = props =>{

    return <Typography className="title" fontSize={'inherit'}  variant='h1'>
        {props.children}
 
    </Typography>
}


export default Title