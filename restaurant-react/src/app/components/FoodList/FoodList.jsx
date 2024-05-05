"use client";
import useFoodHooks from "../../hooks/useFoodHooks";
import FoodItem from "../FoodItem/FoodItem";


export const FoodList = () => {
    const { foods } = useFoodHooks();

    return (
        <div>
            {foods.map((food) => (
                <FoodItem key={food.id} food={food} />
            ))}
        </div>
    );
};
