import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import style from './FooterTail.module.css';
export default function FooterTail(){
    return(
        <div className={style.footerTail}>
            <Typography paragraph className={style.copyRight}><CopyrightIcon /> Copyright Rimel 2022. All right reserved</Typography>
        </div>
    );
}

