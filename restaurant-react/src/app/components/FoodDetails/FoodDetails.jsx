"use client";
import React from "react";
import useFetchFoods from '../../hooks/useFetchFoods';

const FoodDetails = ({ id }) => {
    const { foods } = useFetchFoods(id);

    return (
        <div>
            {foods ? (
                <div>
                    <h2>{foods.name}</h2>
                    <p>{foods.description}</p>
                    <p>Precio: ${foods.precio}</p>
                    <p>Calorías: {foods.calorias}</p>
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="flex">

                            <div className="w-1/2 p-4">
                                <img src="imagen.jpg" alt="Imagen" className="w-full h-auto rounded-lg" />
                            </div>

                            <div className="w-1/2 p-4">
                                <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
                                <ul>
                                    <li>{id}</li>
                                    <li>Ingrediente 2</li>
                                    <li>Ingrediente 3</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Detalles</h2>
                            <p>{foods.description}</p>
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Imágenes adicionales</h2>
                        </div>
                    </div>
                </div>


            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default FoodDetails;


