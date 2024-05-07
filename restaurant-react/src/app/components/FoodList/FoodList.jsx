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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <FoodSearch foods={foods} setFilteredFoods={setFilteredFoods} />
                {filteredFoods.length === 0 ? (
                    <p>No se encontraron platos en el menú.</p>
                ) : (
                    filteredFoods.map((food) => (
                        <FoodItem key={food.id} food={food} />
                    ))
                )}
            </div>
        </div>
    );
}

