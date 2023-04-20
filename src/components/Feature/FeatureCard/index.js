import { Link, Typography } from "@mui/material"

const FeaturedCard = props => {
    return <div style={{position:'relative', background:'#0D0D0D', display:'flex', justifyContent:props.center ? "center" : 'flex-end'}}> 
        <img   src={props.img} />
        <div style={{position:'absolute', bottom:'5%', left:'3%'}} >
            <Typography variant="h3" fontSize={'1.4em'} color={'white'}>{props.title}</Typography>
            <Typography variant="h6" fontSize={'.9em'}  fontWeight={'normal'} color={'white'}>{props.description}</Typography>
            <Link sx={{color:'white'}}>Shop Now</Link>
        </div>
    </div>
}

export default FeaturedCard