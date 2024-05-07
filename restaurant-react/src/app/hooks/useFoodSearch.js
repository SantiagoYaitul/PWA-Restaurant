import { useState } from 'react';

const useFoodSearch = (foods) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredFoods = searchTerm === '' ? foods : foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return {
        searchTerm,
        handleSearch,
        filteredFoods
    };
};

export default useFoodSearch;
