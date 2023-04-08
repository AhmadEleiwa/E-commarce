
import { Link } from "@mui/material"

import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos'
import './style.css'
const LeftSide = props => {
    return <div className="left-side">

        <div className="list">
            <p >Woman’s Fashion</p>
            < ArrowRightIcon fontSize="inherit"  />
        </div>
        <div className="list">
            <p>Men’s Fashion</p>
            <ArrowRightIcon fontSize="inherit" />
        </div>


        <p>Home & Lifestyle </p>
        <p>Medicine </p>
        <p>Sports & Outdoor </p>
        <p>Baby’s & Toys </p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty </p>

    </div>
}

export default LeftSide