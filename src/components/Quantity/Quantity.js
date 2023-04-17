import style from './Quantity.module.css';
import { useState } from 'react';

export default function Quantity(){
    const [count, setCount] = useState(0);
    return(
        <div className={style.quantityBox}>
            <button onClick={() => setCount(count - 1)} className={`${style.btnQuantity} ${style.btnDec}`}>-</button>
            <button className={style.btnCount}>{count}</button>
            <button onClick={() => setCount(count + 1)} className={`${style.btnQuantity}  ${style.btnInc}`}>+</button>
        </div>
    );
}