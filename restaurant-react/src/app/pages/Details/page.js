"use client";
import FoodDetails from '@/app/components/FoodDetails/FoodDetails';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [id, setId] = useState(null);

    useEffect(() => {
        const getIdFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const idFromUrl = params.get('id');
            setId(idFromUrl);
        };
        getIdFromUrl();
    }, []);

    return (
        <div>
            <FoodDetails id={id}/>
        </div>
    );
};

export default Page;

