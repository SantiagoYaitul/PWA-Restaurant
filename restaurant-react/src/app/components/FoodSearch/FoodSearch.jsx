import React, { useState } from 'react';

const FoodSearch = ({ foods, setFilteredFoods }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = term === '' ? foods : foods.filter(food => food.name.toLowerCase().includes(term));
        setFilteredFoods(filtered);
    };

    return (
        <div className="my-4 flex justify-center">
            <input
                type="text"
                placeholder="Buscar comida..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 border rounded-md"
            />
        </div>
    );
};

export default FoodSearch;
