import style from './AsideImages.module.css';
export default function AsideImages({images,handleOnClick}){
    return(
        <div className={style.imagesContainer}>
            {images.map((img,index)=>(
                <AsideImg imgSrc={img} key={index} handleSetMainImg={handleOnClick}/>
            ))}
        </div>
    );
}
function AsideImg({imgSrc,handleSetMainImg}){
    return(
        <div className={style.asideImgContainer}>
            <img src={imgSrc} className={style.asideImg} onClick={(event)=>handleSetMainImg(event.target.getAttribute('src'))}></img>
        </div>
    );
}