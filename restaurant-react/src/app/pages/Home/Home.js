"use client";
import React from 'react';
import useFoodHooks from '../../hooks/useFoodHooks';
import FoodItem from '../../components/FoodItem/FoodItem';

export default function Home() {
    const { foods } = useFoodHooks();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Lista de Comidas</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {foods.map((food) => (
                    <FoodItem key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
}