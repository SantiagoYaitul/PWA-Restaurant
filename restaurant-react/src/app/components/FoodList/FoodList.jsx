"use client";
import React, { useState, useEffect } from 'react';
import useFoodHooks from "../../hooks/useFoodHooks";
import FoodItem from "../FoodItem/FoodItem";
import FoodSearch from "../FoodSearch/FoodSearch";

export const FoodList = () => {
    const { foods } = useFoodHooks();
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [searchError, setSearchError] = useState(false);

    useEffect(() => {
        setFilteredFoods(foods);
    }, [foods]);

    return (
        <div>
            <FoodSearch foods={foods} setFilteredFoods={setFilteredFoods} />
            {searchError && <p>No se encontraron alimentos.</p>}
            {filteredFoods.length > 0 ? (
                filteredFoods.map((food) => (
                    <FoodItem key={food.id} food={food} />
                ))
            ) : (
                !searchError && <p className='text-center'>No esta en el menu.</p>
            )}
        </div>
    );
};