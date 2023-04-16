import TimersItems from "./TimerItems"
import { Button, Typography } from "@mui/material"
import './style.css'
const Banner = props => {
    return <div className="banner">
        <div className="body">
            <Typography color='secondary'>
                Categories
            </Typography>
            <h1>{props.title}</h1>
            <TimersItems timeAsList={['23', '05', '59', '35']} />
            <Button color={'secondary'} variant='contained' disableElevation  sx={{padding:'1em 3em '}}>Buy Now</Button>
        </div>
        <img src={props.img} alt={props.title} />
    </div>
}

export default Banner