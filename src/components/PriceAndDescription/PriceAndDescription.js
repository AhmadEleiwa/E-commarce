import style from './PriceAndDesc.module.css';
export default function PriceAndDescription({price, desc}){
    return(
        <div style={{marginTop:'1em'}}>
            <h3 className={style.price}>${price}</h3>
            <p className={style.desc}>{desc}</p>
        </div>
    );
}