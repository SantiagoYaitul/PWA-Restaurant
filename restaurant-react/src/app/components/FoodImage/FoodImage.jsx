import style from './FoodImage.module.css';

const FoodImage = ( {coverImage , name} ) => {
    return (
        <div className={style.container}>
        <img src={coverImage} alt={name} className={style.image} />
    </div>
    );
};

export default FoodImage;