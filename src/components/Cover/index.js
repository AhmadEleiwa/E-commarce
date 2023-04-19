import style from "./Cover.module.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box} from "@mui/material";

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
        {/* <Select className={style.select} 
        sx={{color:"white"}} 
        name="lang" 
        value={switchToLang} 
        label="English"
        IconComponent={()=><ExpandMoreIcon htmlColor='white'sx={{ cursor:'pointer'}}/>}
        onChange={handleChange}
        >
                <MenuItem value="eng">English</MenuItem>
                <MenuItem value="ar" >Arabic</MenuItem> 
        </Select> */}
        <select className={style.select} name="lang"  value={switchToLang} onChange={handleChange} >
            <option value="eng">English</option>
            <option value="ar">Arabic</option>
        </select>
        </Box>
    );
}