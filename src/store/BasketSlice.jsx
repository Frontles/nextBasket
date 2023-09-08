import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: []
}


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        AddBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
        },
        ResetBasket: (state, action) => {
            state.basket = []
        }
    },


})


export const sepet = (state) => state.basket.basket
export default basketSlice

