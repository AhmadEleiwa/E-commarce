import Item from "./item"
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const RightSide = props => {

    return <div className="right-side">
        <Carousel
        showArrows={false}
        >
                {[1,2,3,4].map((item ,index) => {
                    return <Item title='Up to 10% off Voucher' key={index} src='https://picsum.photos/1800' />
                })}
        </Carousel> 
    </div>
}

export default RightSide