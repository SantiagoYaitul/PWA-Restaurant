import { useState, useEffect } from 'react';

const useFoodHooks = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch('/mocks/comidas.json');
                const data = await response.json();
                setFoods(data.comidas);
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

        fetchFoods();
    }, []);


    return { foods };
};

export default useFoodHooks;
