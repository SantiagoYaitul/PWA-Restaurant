import React, { useState } from 'react';

const FoodSearch = ({ foods, setFilteredFoods }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = term === '' ? foods : foods.filter(food => food.name.toLowerCase().includes(term.toLowerCase()));
        setFilteredFoods(filtered);
    };

    return (
        <div className="my-4 flex justify-center">
            <input
                type="text"
                placeholder="Buscar comida..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 py-2 border rounded-md w-full mx-4 md:w-2/3 lg:w-1/2 bg-palette-dim text-palette-foreground"
            />
        </div>
    );
};

export default FoodSearch;