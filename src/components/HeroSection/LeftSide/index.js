

import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos'
import './style.css'
const LeftSide = props => {
    return <div className="left-side">

        <div className="item">
            <p >Woman’s Fashion</p>
            < ArrowRightIcon fontSize="inherit" />
        </div>
        <div className="item">
            <p>Men’s Fashion</p>
            <ArrowRightIcon fontSize="inherit" />
        </div>
        <div className="item">
            <p>Home & Lifestyle </p>
        </div>

        <div className="item">
            <p>Medicine </p>
        </div>
        <div className="item">
            <p>Sports & Outdoor </p>
        </div>
        <div className="item">
            <p>Baby’s & Toys </p>
        </div>

        <div className="item">
            <p>Groceries & Pets</p>
        </div>
        <div className="item">
            <p>Health & Beauty </p>
        </div>



    </div>
}

export default LeftSide