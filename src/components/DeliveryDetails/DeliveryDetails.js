import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import style from './DeliveryDetails.module.css';

export default function DeliveryDetails(){
    return(
        <div className={style.deliveryContainer}>
            <Delivery icon={<LocalShippingOutlinedIcon />} title="Free Delivery" content="Enter your postal code for Delivery Availability"/>
            <Delivery icon={<CachedOutlinedIcon />} title="Return Delivery" content="Free 30 Days Delivery Returns. Details"/> 
        </div>
    );
}
function Delivery({icon,title,content}){
    return(
            <div className={style.deliveryWrapper}>
                <div className={style.deliveryIcon}>{icon}</div>

                <div className={style.deliveryContent}>
                    <h3 className={style.deliveryTitle}>{title}</h3>
                    <p className={style.deliveryDescription}>{content}</p>
                </div>
            </div>
    );
}
