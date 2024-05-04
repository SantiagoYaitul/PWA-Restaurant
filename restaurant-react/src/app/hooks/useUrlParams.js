import { useEffect, useState } from 'react';

const useUrlParams = () => {
    const [id, setId] = useState(null);

    useEffect(() => {
        const getIdFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const idFromUrl = params.get('id');
            setId(idFromUrl);
        };
        getIdFromUrl();
    }, []);

    return id;
};

export default useUrlParams;

