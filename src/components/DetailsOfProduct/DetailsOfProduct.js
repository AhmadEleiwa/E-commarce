import NavLinks from '../NavLinks/NavLinks';
import ProductImages from '../ProductImages/ProductImages';
import Details from '../Details/Details';
import productsData from '../ProductsData/ProductsData';
import style from './DetailsOfProduct.module.css';

 //get ID from url
 //const params = useParams();
//assumption
const idfromLink=3;

const theProductData = productsData.find(item => {
    return item.id === idfromLink;
  });

export default function DetailsOfProduct(){ 
    const array=[theProductData.image,theProductData.image,theProductData.image,theProductData.image]; 
    return(
        <div>
            <div><NavLinks prouctName={theProductData.title} /></div>
            <div className={style.container}>
                <ProductImages arr={array}/>
                <Details prouctData={theProductData} />
            </div>
        </div>
    );
}