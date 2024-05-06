"use client";
import React from 'react';
import FoodDetails from '../../components/FoodDetails/FoodDetails';
import useUrlParams from '../../hooks/useUrlParams';

const Page = () => {
    const id = useUrlParams();

    return (
        <div>
            <FoodDetails id={id}/>
        </div>
    );
};

export default Page;