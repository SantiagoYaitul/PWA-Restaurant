import style from './FoodImage.module.css';

const FoodImage = ( {coverImage } ) => {
    return (
        <div className={style.container}>
        <img src={coverImage} alt="Imagen" className={style.image} />
    </div>
    );
};

export default FoodImage;