import React from "react";
import style from "./FoodDescription.module.css";

const FoodDescription = ({ description }) => {
    return (
        <div className={`${style.descriptionContainer}`}>
            <h2 className={`${style.title}`}>Descripción</h2>
            <p className={`${style.description}`}>{description}</p>
        </div>
    );
};

export default FoodDescription;
