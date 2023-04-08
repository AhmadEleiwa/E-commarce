import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import { Divider } from "@mui/material"
import './style.css'
const HeroSection = props =>{
    return <div className="hero-section">
        <LeftSide />
        <Divider orientation="vertical" flexItem  />
        <RightSide />
    </div>
}

export default HeroSection