import { Box } from '@mui/material';
import { useState } from 'react';
import AsideImages from '../AsideImages/AsideImages';
import MainImage from '../MainImage/MainImage';

export default function ProductImages({arr}){
    const [mainImg,setMainImg]=useState(arr[0]);
    return(
       <Box display={'flex'} flexDirection="row" alignItems={'center'} sx={{width:'50%'}} >
        <AsideImages
                images={arr}
                handleOnClick={setMainImg}
                />
        <MainImage img={mainImg}/>
        </Box>
    );
}