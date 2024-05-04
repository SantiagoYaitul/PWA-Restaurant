import style from './FoodImage.module.css';

const FoodImage = () => {
    return (
        <div className={style.container}>
        <img src="/" alt="Imagen" className={style.image} />
    </div>
    );
};

export default FoodImage;