import { useState, useEffect } from 'react';

const useFetchFoods = (id) => {
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch(`/mocks/${id}.json`);
                if (!response.ok) {
                    throw new Error('Error fetching foods');
                }
                const data = await response.json();
                setFoods(data);
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

        fetchFoods();
    }, [id]);

    return { foods };
};

export default useFetchFoods;
