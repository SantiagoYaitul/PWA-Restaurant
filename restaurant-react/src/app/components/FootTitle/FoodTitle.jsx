import style from './FoodTitle.module.css';

const FoodTitle = ({ name }) => {
    return (
        <h2 className={style.name}>{name}</h2>
    );
};

export default FoodTitle;