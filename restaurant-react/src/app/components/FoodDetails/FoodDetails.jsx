import React from "react";
import style from "./FoodDetails.module.css";
import useFetchFoods from '../../hooks/useFetchFoods';
import FoodIngredients from "../FoodIngredients/FoodIngredients";
import FoodAllergies from "../FoodAllergies/FoodAllergies";
import FoodDescription from "../FoodDescription/FoodDescription";
import FoodCarousel from "../FoodCarousel/FoodCarousel";


const FoodDetails = ({ id }) => {
    const { foods } = useFetchFoods(id);

    return (
        <>
            {foods && (
                <div className={`${style.container}`}>
                    <div className="flex">
                        <div className={`${style.imageContainer}`}>
                            <img src={foods.coverImage} alt={foods.name} className={`${style.image}`} />
                        </div>
                        <FoodIngredients ingredients={foods.ingredientes} />
                    </div>
                    <div className="flex justify-center">
                        <FoodAllergies allergies={foods.alergenos} calories={foods.calorias} />
                    </div>
                    <FoodDescription description={foods.description} />
                    <FoodCarousel images={foods.galeria} />
                    <div className={`${style.bottomPadding}`}></div>
                </div>
            )}
        </>
    );
};

export default FoodDetails;

