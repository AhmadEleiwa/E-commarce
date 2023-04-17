import Link from '@mui/material/Link';
import style from './NavLinks.module.css';
export default function NavLinks({prouctName}){
    return(
        <div className={style.navLink} >
            <Link href="#" underline="none" sx={{color:'#000000',opacity:' 0.5'}}>Account </Link>
            <Link href="#" underline="none" sx={{color:'#000000',opacity:' 0.5'}}>/ Gaming </Link>
            <Link href="#" underline="none" sx={{color:'#000000'}}>/ {prouctName}</Link>
        </div>
    );
}