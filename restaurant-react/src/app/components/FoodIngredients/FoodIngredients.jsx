import React from "react";
import style from "./FoodIngredients.module.css";

const FoodIngredients = ({ ingredients }) => {
    return (
        <div className={`${style.ingredientsContainer}`}>
            <h2 className={`${style.title}`}>Ingredientes</h2>
            <ul className={`${style.list} ${style.ingredientsList}`}>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodIngredients;
