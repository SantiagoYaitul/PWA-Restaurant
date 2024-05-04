import Button from '../Button/Button';
import FoodImage from '../FoodImage/FoodImage';
import style from './FootItem.module.css';

const FoodItem = ({ food }) => {
    return (
        <div className={style.container}>
            <div className="md:flex">
                <FoodImage />
                <div className={style.details}>
                    <h2 className={style.name}>{food.name}</h2>
                    <p className={style.description}>{food.description}</p>
                    <div className="mt-4">
                        <h3 className={style.price}>Precio: {food.precio}</h3>
                    </div>
                        <Button id={food.id} />
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
