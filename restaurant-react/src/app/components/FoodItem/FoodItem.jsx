import Button from '../Button/Button';
import FoodImage from '../FoodImage/FoodImage';
import FoodTitle from '../FootTitle/FoodTitle';
import style from './FoodItem.module.css';


const FoodItem = ({ food }) => {
    return (
        <div className={style.container}>
            <div className="md:flex">
                <FoodImage coverImage={food.coverImage} name={food.name} />
                <div className={style.details}>
                    <FoodTitle name={food.name} />
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
