import React from 'react';
//import style from './FoodItem.module.css';

const FoodItem = ({ food }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
            <div className="md:flex">
                <div className="md:w-1/3 bg-gray-800 text-white p-4 text-center md:text-left rounded-tl-xl rounded-bl-xl">
                    <img src="/" alt="Imagen" className="w-full h-auto" />
                </div>
                <div className="md:w-2/3 p-4">
                    <h2 className="text-2xl font-bold">{food.name}</h2>
                    <p className="text-gray-700 mt-2">{food.description}</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-right">Precio:</h3>
                    </div>
                    <div className="text-right p-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
