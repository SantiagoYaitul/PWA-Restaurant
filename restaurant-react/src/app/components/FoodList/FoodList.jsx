"use client";
import React, { useState, useEffect } from 'react';
import useFoodHooks from "../../hooks/useFoodHooks";
import FoodItem from "../FoodItem/FoodItem";
import FoodSearch from "../FoodSearch/FoodSearch";

export const FoodList = () => {
    const { foods } = useFoodHooks();
    const [filteredFoods, setFilteredFoods] = useState([]);

    useEffect(() => {
        setFilteredFoods(foods);
    }, [foods]);

    return (
        <div>
            <FoodSearch foods={foods} setFilteredFoods={setFilteredFoods} />
            {filteredFoods.map((food) => (
                <FoodItem key={food.id} food={food} />
            ))}
        </div>
    );
};

