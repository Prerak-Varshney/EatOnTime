import React from 'react';
import { useDispatch } from 'react-redux';
import { addRestaurant } from '../lib/features/restaurants/restaurantsSlice';

const AddRestaurant = () => {
    const dispatch = useDispatch();

    dispatch(addRestaurant())
    return (
        <div>

        </div>
    );
};

export default AddRestaurant;