import React from 'react';
import { FoodList } from '../../components/FoodList/FoodList';
import FoodDetails from '../../components/FoodDetails/FoodDetails';

export default function Home() {

    return (
        <div>
            <FoodList />
            <FoodDetails />
        </div>
    );
}