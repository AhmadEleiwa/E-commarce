import ReviewsSection from '../ReviewsSection/ReviewsSection';
import ProductName from '../ProductName/ProductName';
import PriceAndDescription from '../PriceAndDescription/PriceAndDescription';
import ColoursDetails from '../ColoursDetails/ColoursDetails';
import SizeDetails from '../SizeDetails/SizeDetails';
import { Box } from '@mui/material';
import Quantity from '../Quantity/Quantity';
import Favorite from '../Favorite/Favorite';
import BuyButton from '../BuyButton/BuyButton';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import style from './Details.module.css';
export default function Details({prouctData}){
    const {title,price,description,rating:{rate}}=prouctData;
    return(
        <div  className={style.detailsContainer}>
            <ProductName prouctName={title} />
            <ReviewsSection rating={rate}/>
            <PriceAndDescription price={price} desc={description}/>
            <ColoursDetails />
            <SizeDetails />
            <Box sx={{display:'flex',mt:'1em',with:'100%'}}>
                <Quantity />
                <BuyButton />
                <Favorite />
            </Box>
            <DeliveryDetails />
        </div>
    );
}