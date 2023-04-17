import { useState } from 'react';
import AsideImages from '../AsideImages/AsideImages';
import MainImage from '../MainImage/MainImage';

export default function ProductImages({arr}){
    const [mainImg,setMainImg]=useState(arr[0]);
    return(
        <>
        <AsideImages
                images={arr}
                handleOnClick={setMainImg}
                />
        <MainImage img={mainImg}/>
        </>
    );
}