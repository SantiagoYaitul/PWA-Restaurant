import style from './FoodImage.module.css';

const FoodImage = ({ coverImage, name, className }) => {
    return <img src={coverImage} alt={name} className={style.image + " " + className} />;
};

export default FoodImage;