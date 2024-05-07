import React from "react";
import style from "./FoodAllergies.module.css";

const FoodAllergies = ({ allergies, calories }) => {
    return (
        <div className={`${style.allergiesContainer}`}>
            <div className="flex justify-between">
                <div>
                    <h2 className={`${style.title}`}>Alergias</h2>
                    <ul className={`${style.list}`}>
                        {allergies.map((allergen, index) => (
                            <li key={index}>{allergen}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className={`${style.title}`}>Calorías</h2>
                    <p>Calorías por porción: {calories}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodAllergies;
