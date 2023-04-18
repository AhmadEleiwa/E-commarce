import NavLinks from '../NavLinks/NavLinks';
import ProductImages from '../ProductImages/ProductImages';
import Details from '../Details/Details';
import productsData from '../products data/products data';
import style from './DetailsOfProduct.module.css';
import { useParams } from 'react-router-dom';



export default function DetailsOfProduct() {
    const {id} = useParams()
    const theProductData = productsData.find(item => {
        return item.id === parseInt(id);
    });

    const array = [theProductData.image, theProductData.image, theProductData.image, theProductData.image];
    return (
        <div>
            <div><NavLinks prouctName={theProductData.title} /></div>
            <div className={style.container}>
                <ProductImages arr={array} />
                <Details prouctData={theProductData} />
            </div>
        </div>
    );
}