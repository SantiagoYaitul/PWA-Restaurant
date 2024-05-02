import React from 'react';
//import style from './FoodItem.module.css';

const FoodItem = ({food}) => {
    return (
        <div className="border rounded p-4 m-2 cursor-pointer">
            <h2 className="text-xl font-bold">{food.name}</h2>
            <p>{food.description}</p>
            <img src={food.coverImage} alt="" />
        </div>
    );
};

export default FoodItem;