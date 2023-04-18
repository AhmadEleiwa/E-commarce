import { Typography } from "@mui/material"
import './style.css'
const SubTitle = props =>{
    return <div className="sub-title">
        <div></div>
        <Typography variant="p">{props.children}</Typography>

    </div>
}

export default SubTitle