import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './features/restaurants/restaurantsSlice'

export const store = configureStore({
    reducer: restaurantReducer
})