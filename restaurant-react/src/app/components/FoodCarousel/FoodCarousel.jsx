import React from "react";
import style from "./FoodCarousel.module.css";

const FoodCarousel = ({ images }) => {
    return (
        <div className={`${style.additionalImagesContainer}`}>
            <h2 className={`${style.title}`}>Imágenes adicionales</h2>
            <div className={`${style.carousel}`}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={"Imagen " + (index + 1)} className={`${style.additionalImage}`} />
                ))}
            </div>
        </div>
    );
};

export default FoodCarousel;
