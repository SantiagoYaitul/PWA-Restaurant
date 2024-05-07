import React from 'react';
import style from './FoodSearch.module.css';
import useFoodSearch from '../../hooks/useFoodSearch';

const FoodSearch = ({ foods, setFilteredFoods }) => {
    const { searchTerm, handleSearch, filteredFoods } = useFoodSearch(foods);

    React.useEffect(() => {
        setFilteredFoods(filteredFoods);
    }, [filteredFoods, setFilteredFoods]);

    return (
        <div className="my-4 flex justify-center">
            <input
                type="text"
                placeholder="Buscar comida..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className={`${style.input}`}
            />
        </div>
    );
};

export default FoodSearch;


