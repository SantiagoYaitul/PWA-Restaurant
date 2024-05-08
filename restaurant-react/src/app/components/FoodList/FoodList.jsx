'use client';
import React, { useState, useEffect } from 'react';
import useFoodHooks from "../../hooks/useFoodHooks";
import FoodItem from "../FoodItem/FoodItem";
import FoodSearch from "../FoodSearch/FoodSearch";
import style from "./FoodList.module.css";

export const FoodList = () => {
    const { foods } = useFoodHooks();
    const [filteredFoods, setFilteredFoods] = useState([]);

    useEffect(() => {
        setFilteredFoods(foods);
    }, [foods]);

    return <div>
        <FoodSearch foods={foods} setFilteredFoods={setFilteredFoods} />
        <div className={style.container}>
            {filteredFoods.length === 0 ? (
                <p>No se encontraron platos en el menú.</p>
            ) : (
                filteredFoods.map((food) => (
                    <FoodItem key={food.id} food={food} />
                ))
            )}
        </div>
    </div >;
}

