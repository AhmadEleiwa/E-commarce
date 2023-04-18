import style from './MainImage.module.css';
export default function MainImage({img}){
    return(
        <div className={style.mainImgContainer}>
            <img src={img} className={style.mainImg} alt={"img"} />
        </div>
    );
}