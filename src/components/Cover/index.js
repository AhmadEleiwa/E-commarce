import style from "./Cover.module.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box} from "@mui/material";
import { Link } from "react-router-dom";

export default function Cover(){
    return(
        <div className={style.coverContainer}>
            <Typography component="p">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography><Link href="#">ShopNow</Link>
            <LanguagesList />
        </div>
    );
}
 function LanguagesList(){
   
    const [switchToLang,setswitchToLang]=useState('eng');
    function handleChange(e){
        setswitchToLang(e.target.value);
    }
    return(
        <Box className={style.langList} > 

        <select className={style.select} name="lang"  value={switchToLang} onChange={handleChange} >
            <option value="eng">English</option>
            <option value="ar">Arabic</option>
        </select>
        </Box>
    );
}