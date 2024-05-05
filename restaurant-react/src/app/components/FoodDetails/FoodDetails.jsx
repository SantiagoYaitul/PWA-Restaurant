import React from "react";
import style from "./FoodDetails.module.css";
import useFetchFoods from '../../hooks/useFetchFoods';

const FoodDetails = ({ id }) => {
    const { foods } = useFetchFoods(id);

    return (
        <div>
            {foods && (
                <div className={style.container}>
                    <div className="flex">
                        <div className={style.imageContainer}>
                            <img src={foods.coverImage} alt={foods.name} className={style.image} />
                        </div>
                        <div className={style.ingredientsContainer}>
                            <h2 className={style.title}>Ingredientes</h2>
                            <ul className={style.list}>
                                {foods.ingredientes.map((ingrediente, index) => (
                                    <li key={index}>{ingrediente}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="h-4"></div>
                    <div className="flex justify-center">
                        <div className={style.allergiesContainer}>
                            <div className="flex justify-between">
                                <div>
                                    <h2 className={style.title}>Alergias</h2>
                                    <ul className={style.list}>
                                        {foods.alergenos.map((alergeno, index) => (
                                            <li key={index}>{alergeno}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h2 className={style.title}>Calorías</h2>
                                    <p>Calorías por porción: {foods.calorias}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-4"></div>
                    <div className={style.descriptionContainer}>
                        <h2 className={style.title}>Descripción</h2>
                        <p className={style.description}>{foods.description}</p>
                    </div>
                    <div className="h-4"></div>
                    <div className={style.additionalImagesContainer}>
                        <h2 className={style.title}>Imágenes adicionales</h2>
                        <div className={style.carousel}>
                            {foods.galeria.map((imagen, index) => (
                                <img key={index} src={imagen} alt={"Imagen " + (index + 1)} className={style.additionalImage} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetails;
