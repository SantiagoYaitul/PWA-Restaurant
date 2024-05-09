import React from "react";
import style from "./FoodDetails.module.css";
import useFetchFoods from '../../hooks/useFetchFoods';
import FoodIngredients from "../FoodIngredients/FoodIngredients";
import FoodAllergies from "../FoodAllergies/FoodAllergies";
import FoodDescription from "../FoodDescription/FoodDescription";
import FoodCarousel from "../FoodCarousel/FoodCarousel";
import Button from "../Button/Button";

const FoodDetails = ({ id }) => {
    const { foods } = useFetchFoods(id);

    return <div className={`${style.container}`}>
        {foods && (
            <div>
                <div className="flex justify-between">
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
                <div className="flex justify-end w-full pb-4"><span className="text-end text-xl font-bold">Precio: ${foods.precio} </span></div>
            </div>
        )}
        <Button redirect="/pages/Menu" text="Go Back" />
    </div>;
};

export default FoodDetails;

