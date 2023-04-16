import { Link } from "@mui/material"
import ArrowRightSharpIcon from '@mui/icons-material/ArrowForward'
import './style.css'
const Item = props =>{
    return <div className="slider-item" style={{backgroundImage:`url(${props.src})`}}>   
            <h1>{props.title}</h1>
            <Link href="ss" variant="text" color='inherit' endIcon={<ArrowRightSharpIcon />}>Shop Now</Link>

    </div>
}

export default Item