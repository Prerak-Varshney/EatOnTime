import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [{id: '', name: ''}]
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            const restaurant = {
                id: nanoid(),
                name: action.payload
            }
            state.restaurants.push(restaurant)
        },
        removeRestaurant: (state, action) => {
            state.restaurants = state.restaurants.filter((restaurant) =>
                restaurant.id !== action.payload
            )
        },
    }
});

export const {addRestaurant, removeRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;